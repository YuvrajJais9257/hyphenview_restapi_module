import React from "react";
import "./UrlBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setMethod,
  setURL,
  setResponse,
} from "../../redux/actions/RESTAPIActions";
import axios from "axios";
import CryptoJS from "crypto-js";

const UrlBar = () => {
  const dispatch = useDispatch();
  const method = useSelector((state) => state.restapi.request.method);
  const handleMethodChange = (e) => {
    dispatch(setMethod(e.target.value));
  };
  const url = useSelector((state) => state.restapi.request.url);
  const handleURLChange = (e) => {
    dispatch(setURL(e.target.value));
  };
  const params = useSelector((state) => state.restapi.request.params);
  const headers = useSelector((state) => state.restapi.request.headers);
  const body = useSelector((state) => state.restapi.request.body);
  const auth = useSelector((state) => state.restapi.request.auth);
  console.log(auth, "auth");

  function base64UrlEncode(data) {
    return btoa(JSON.stringify(data))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }

  function generateJWT(payload, secret, algorithm = "HS256") {
    const header = { alg: algorithm, typ: "JWT" };
    const encodedHeader = base64UrlEncode(header);
    const encodedPayload = base64UrlEncode(payload);

    // Only HMAC SHA-256 supported here as an example (HS256)
    const signature = CryptoJS.HmacSHA256(
      `${encodedHeader}.${encodedPayload}`,
      secret
    ).toString(CryptoJS.enc.Base64);
    const encodedSignature = signature
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

    return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
  }

  function generateNonce() {
    return Math.random().toString(36).substr(2); // Simple random string as nonce
  }

  function generateOAuthSignature({
    url,
    method,
    consumerKey,
    consumerSecret,
    token,
    tokenSecret,
    timestamp,
    nonce,
  }) {
    const baseString = createBaseString(
      url,
      method,
      consumerKey,
      token,
      timestamp,
      nonce
    );
    const signingKey = `${encodeURIComponent(
      consumerSecret
    )}&${encodeURIComponent(tokenSecret)}`;

    return CryptoJS.HmacSHA1(baseString, signingKey).toString(
      CryptoJS.enc.Base64
    );
  }

  function createBaseString(url, method, consumerKey, token, timestamp, nonce) {
    const params = {
      oauth_consumer_key: consumerKey,
      oauth_token: token,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: timestamp,
      oauth_nonce: nonce,
      oauth_version: "1.0",
    };

    const sortedParams = Object.keys(params)
      .sort()
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      })
      .join("&");

    return `${method.toUpperCase()}&${encodeURIComponent(
      url
    )}&${encodeURIComponent(sortedParams)}`;
  }

  const handleSendRequest = async () => {
    const requestUrl = url;

    // Prepare the parameters for the request
    const queryParams = {};
    params.forEach((param) => {
      queryParams[param.key] = param.value;
    });

    // Prepare headers from headers array
    const requestHeaders = headers.reduce((acc, header) => {
      acc[header.key] = header.value;
      return acc;
    }, {});

    // Add Content-Type header
    requestHeaders["Content-Type"] = "application/json";

    console.log(requestHeaders, "requestHeaders");
    console.log(auth, "auth");

    switch (auth?.type) {
      case "OAuth 2.0":
        if (auth.authTwo && auth.authTwo.token) {
          requestHeaders["Authorization"] = `Bearer ${auth.authTwo.token}`;
        }
        break;

      case "Basic Auth":
        if (auth.basicAuth?.username && auth.basicAuth?.password) {
          const basicAuthToken = btoa(
            `${auth.basicAuth.username}:${auth.basicAuth.password}`
          );
          requestHeaders["Authorization"] = `Basic ${basicAuthToken}`;
        }
        break;

      case "JWT Bearer":
        if (auth.jwtBearer && auth.jwtBearer.secret) {
          const jwtToken = generateJWT(
            JSON.parse(auth.jwtBearer.payload), // assuming payload is stored as JSON string
            auth.jwtBearer.secret,
            auth.jwtBearer.algorithm || "HS256"
          );
          requestHeaders[
            auth.jwtBearer.requestHeaderPrefix || "Authorization"
          ] = `Bearer ${jwtToken}`;
        }
        break;

      case "API Key":
        if (auth.apiKey && auth.apiKey.key && auth.apiKey.value) {
          console.log("Using API Key:", auth.apiKey.key);
          requestHeaders[auth.apiKey.key] = auth.apiKey.value; // Use the correct key
        } else {
          console.error("API Key authentication details are incomplete.");
          // Handle error (e.g., show a message to the user or throw an exception)
        }
        break;

      case "Bearer Token":
        if (auth.bearerToken && auth.bearerToken.token) {
          requestHeaders["Authorization"] = `Bearer ${auth.bearerToken.token}`;
        }
        break;

      case "OAuth 1.0":
        if (
          auth.authOne &&
          auth.authOne.consumerKey &&
          auth.authOne.consumerSecret &&
          auth.authOne.token &&
          auth.authOne.tokenSecret
        ) {
          const { consumerKey, consumerSecret, token, tokenSecret } =
            auth.authOne;

          // Generate the OAuth signature
          const signature = generateOAuthSignature({
            url: requestUrl, // The URL of the request
            method: method, // The HTTP method (GET, POST, etc.)
            consumerKey,
            consumerSecret,
            token,
            tokenSecret,
            timestamp: Math.floor(Date.now() / 1000),
            nonce: generateNonce(), // Function to generate a unique nonce
          });

          // Construct the Authorization header
          const authHeader =
            `OAuth ` +
            `oauth_consumer_key="${encodeURIComponent(consumerKey)}", ` +
            `oauth_token="${encodeURIComponent(token)}", ` +
            `oauth_signature="${encodeURIComponent(signature)}", ` +
            `oauth_signature_method="HMAC-SHA1", ` +
            `oauth_timestamp="${Math.floor(Date.now() / 1000)}", ` +
            `oauth_nonce="${generateNonce()}", ` +
            `oauth_version="1.0"`;

          requestHeaders["Authorization"] = authHeader;
        } else {
          console.error("OAuth 1.0 authentication details are incomplete.");
          // Handle error (e.g., show a message to the user or throw an exception)
        }
        break;

      case "No Auth":
        // No authorization headers needed
        break;

      default:
        console.warn("Unsupported authentication type:", auth?.type);
        break;
    }

    try {
      const response = await axios({
        url: requestUrl,
        method, // Ensure 'method' is defined (e.g., 'POST' or 'GET')
        headers: requestHeaders,
        params: queryParams,
        // data: JSON.parse(body), // Ensure 'data' is defined (e.g., 'body')
        data: method === "POST" ? JSON.parse(body) : undefined,
      });

      console.log("Full response:", response);

      // Dispatch the response to Redux store
      dispatch(setResponse(response.data));
    } catch (error) {
      console.error("Error during Axios request:", error);
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        dispatch(setResponse({ error: error.response.data || error.message }));
      } else {
        dispatch(setResponse({ error: error.message })); // Set error in response
      }
    }
  };

  return (
    <div className="url-bar">
      <select
        value={method}
        onChange={handleMethodChange}
        className="method-select postman-select"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        type="text"
        value={url}
        onChange={handleURLChange}
        placeholder="Enter URL or paste text"
        className="url-input postman-text-input"
      />
      <button
        onClick={handleSendRequest}
        className="postman-buttons send-button"
      >
        Send
      </button>
    </div>
  );
};

export default UrlBar;
