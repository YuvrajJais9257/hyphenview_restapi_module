import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AuthSection.css";
import { Info, ChevronDown } from "lucide-react";
import {
  setAuthType,
  setApiKeyKey,
  setApiKeyValue,
  setApiKeyAddTo,
  setBasicAuthUsername,
  setBasicAuthPassword,
  setBearerTokenToken,
  setJWTBearerAlgorithm,
  setJWTBearerSecret,
  setJWTBearerSecretBase64Encoded,
  setJWTBearerPayload,
  setJWTBearerRequestHeaderPrefix,
  setJWTBearerAddJWTTokenTo,
  setJWTBearerJWTHeaders,
  setAuthOneSignatureMethod,
  setAuthOneConsumerKey,
  setAuthOneConsumerSecret,
  setAuthOneAccessToken,
  setAuthOneTokenSecret,
  setAuthOneCallbackURL,
  setAuthOneVerifier,
  setAuthOneTimestamp,
  setAuthOneNonce,
  setAuthOneVersion,
  setAuthOneRealm,
  setAuthOneIncludeBodyHash,
  setAuthOneAddEmptyParametersToSignature,
  setAuthOneAddAuthorizationDataTo,
  setAuthTwoAvailableTokens,
  setAuthTwoToken,
  setAuthTwoHeaderPrefix,
  setAuthTwoAutoRefreshToken,
  setAuthTwoShareToken,
  setAuthTwoTokenName,
  setAuthTwoGrantType,
  setAuthTwoCallbackUrl,
  setAuthTwoAuthorizeUsingBrowser,
  setAuthTwoAuthUrl,
  setAuthTwoAccessTokenUrl,
  setAuthTwoClientId,
  setAuthTwoClientSecret,
  setAuthTwoScope,
  setAuthTwoState,
  setAuthTwoClientAuthentication,
  setAuthTwoRefreshTokenUrl,
  setAuthTwoAuthRequest,
  setAuthTwoTokenRequest,
  setAuthTwoRefreshRequest,
  // clearAuthTwoCookies,
  getAuthTwoNewAcessToken,
} from "../../redux/actions/RESTAPIActions";
import { Link } from "react-router-dom";
import AddIcon from "./../../assets/images/AddIcon.png";

const AuthSection = ({
  newAuthRequestKey,
  newAuthRequestValue,
  setNewAuthRequestKey,
  setNewAuthRequestValue,
  newTokenRequestKey,
  newTokenRequestValue,
  setNewTokenRequestKey,
  setNewRefreshRequestValue,
  setNewTokenRequestValue,
  newRefreshRequestKey,
  newRefreshRequestValue,
  setNewRefreshRequestKey,
  showNewTokenConfig,
  setShowNewTokenConfig,
  setShowOAuth2AdvancedConfig,
  showOAuth2AdvancedConfig,
  showOAuth1AdvancedConfig,
  setShowOAuth1AdvancedConfig,
  setShowJWTBearerAdvancedConfig,
  showJWTBearerAdvancedConfig,
}) => {
  const dispatch = useDispatch();
  const authType = useSelector((state) => state.restapi.request.auth.type);
  const handleAuthTypeChange = (e) => {
    dispatch(setAuthType(e.target.value));
  };
  const apiKeyKey = useSelector(
    (state) => state.restapi.request.auth.apiKey.key
  );

  const handleApiKeyKey = (e) => {
    dispatch(setApiKeyKey(e.target.value));
  };
  const apiKeyValue = useSelector(
    (state) => state.restapi.request.auth.apiKey.value
  );
  const handleApiKeyValue = (e) => {
    dispatch(setApiKeyValue(e.target.value));
  };
  const apiKeyAddTo = useSelector(
    (state) => state.restapi.request.auth.apiKey.addTo
  );
  const handleApiKeyAddTo = (e) => {
    dispatch(setApiKeyAddTo(e.target.value));
  };

  const basicAuthUsername = useSelector(
    (state) => state.restapi.request.auth.basicAuth.username
  );
  const basicAuthPassword = useSelector(
    (state) => state.restapi.request.auth.basicAuth.password
  );
  const handleBasicAuthUsername = (e) => {
    dispatch(setBasicAuthUsername(e.target.value));
  };
  const handleBasicAuthPassword = (e) => {
    dispatch(setBasicAuthPassword(e.target.value));
  };
  const bearerTokenToken = useSelector(
    (state) => state.restapi.request.auth.bearerToken.token
  );
  const handleBearerTokenToken = (e) => {
    dispatch(setBearerTokenToken(e.target.value));
  };
  const jwtBearerAlgorithm = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.algorithm
  );
  const handleJWTBearerAlgorithm = (e) => {
    dispatch(setJWTBearerAlgorithm(e.target.value));
  };
  const jwtBearerSecret = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.secret
  );
  const handleJWTBearerSecret = (e) => {
    dispatch(setJWTBearerSecret(e.target.value));
  };
  const jwtBearerSecretBase64Encoded = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.secretBase64Encoded
  );
  const handleJWTBearerSecretBase64Encoded = (e) => {
    dispatch(setJWTBearerSecretBase64Encoded(e.target.checked));
  };
  const jwtBearerPayload = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.payload
  );
  const handleJWTBearerPayload = (e) => {
    dispatch(setJWTBearerPayload(e.target.value));
  };
  const jwtBearerRequestHeaderPrefix = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.requestHeaderPrefix
  );
  const handleJWTBearerRequestHeaderPrefix = (e) => {
    dispatch(setJWTBearerRequestHeaderPrefix(e.target.value));
  };
  const jwtBearerAddJWTTokenTo = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.addJWTTokenTo
  );
  const handleJWTBearerAddJWTTokenTo = (e) => {
    dispatch(setJWTBearerAddJWTTokenTo(e.target.value));
  };
  const jwtBearerJWTHeaders = useSelector(
    (state) => state.restapi.request.auth.jwtBearer.jwtHeaders
  );
  const handleJWTBearerJWTHeaders = (e) => {
    dispatch(setJWTBearerJWTHeaders(e.target.value));
  };
  const authOneSignatureMethod = useSelector(
    (state) => state.restapi.request.auth.authOne.signatureMethod
  );
  console.log(authOneSignatureMethod, "authOneSignatureMethod");
  
  const handleAuthOneSignatureMethod = (e) => {
    dispatch(setAuthOneSignatureMethod(e.target.value));
  };

  const authOneConsumerKey = useSelector(
    (state) => state.restapi.request.auth.authOne.consumerKey
  );
  const handleAuthOneConsumerKey = (e) => {
    dispatch(setAuthOneConsumerKey(e.target.value));
  };
  const authOneConsumerSecret = useSelector(
    (state) => state.restapi.request.auth.authOne.consumerSecret
  );
  const handleAuthOneConsumerSecret = (e) => {
    dispatch(setAuthOneConsumerSecret(e.target.value));
  };
  const authOneAccessToken = useSelector(
    (state) => state.restapi.request.auth.authOne.accessToken
  );
  const handleAuthOneAccessToken = (e) => {
    dispatch(setAuthOneAccessToken(e.target.value));
  };
  const authOneTokenSecret = useSelector(
    (state) => state.restapi.request.auth.authOne.tokenSecret
  );
  const handleAuthOneTokenSecret = (e) => {
    dispatch(setAuthOneTokenSecret(e.target.value));
  };
  const authOneCallbackURL = useSelector(
    (state) => state.restapi.request.auth.authOne.callbackURL
  );
  const handleAuthOneCallbackURL = (e) => {
    dispatch(setAuthOneCallbackURL(e.target.value));
  };
  const authOneVerifier = useSelector(
    (state) => state.restapi.request.auth.authOne.verifier
  );
  const handleAuthOneVerifier = (e) => {
    dispatch(setAuthOneVerifier(e.target.value));
  };
  const authOneTimestamp = useSelector(
    (state) => state.restapi.request.auth.authOne.timestamp
  );
  const handleAuthOneTimestamp = (e) => {
    dispatch(setAuthOneTimestamp(e.target.value));
  };
  const authOneNonce = useSelector(
    (state) => state.restapi.request.auth.authOne.nonce
  );
  const handleAuthOneNonce = (e) => {
    dispatch(setAuthOneNonce(e.target.value));
  };
  const authOneVersion = useSelector(
    (state) => state.restapi.request.auth.authOne.version
  );
  const handleAuthOneVersion = (e) => {
    dispatch(setAuthOneVersion(e.target.value));
  };
  const authOneRealm = useSelector(
    (state) => state.restapi.request.auth.authOne.realm
  );
  const handleAuthOneRealm = (e) => {
    dispatch(setAuthOneRealm(e.target.value));
  };
  const authOneIncludeBodyHash = useSelector(
    (state) => state.restapi.request.auth.authOne.includeBodyHash
  );
  const handleAuthOneIncludeBodyHash = (e) => {
    dispatch(setAuthOneIncludeBodyHash(e.target.checked));
  };
  const authOneAddEmptyParametersToSignature = useSelector(
    (state) => state.restapi.request.auth.authOne.addEmptyParametersToSignature
  );
  const handleAuthOneAddEmptyParametersToSignature = (e) => {
    dispatch(setAuthOneAddEmptyParametersToSignature(e.target.checked));
  };
  const authOneAddAuthorizationDataTo = useSelector(
    (state) => state.restapi.request.auth.authOne.addAuthorizationDataTo
  );
  const handleAuthOneAddAuthorizationDataTo = (e) => {
    dispatch(setAuthOneAddAuthorizationDataTo(e.target.value));
  };
  const authTwoAvailableTokens = useSelector(
    (state) => state.restapi.request.auth.authTwo.availableTokens
  );
  const handleAuthTwoAvailableTokens = (e) => {
    dispatch(setAuthTwoAvailableTokens(e.target.value));
  };

  
  const authTwoToken = useSelector(
    (state) => state.restapi.request.auth.authTwo.token
  );

  
  const handleAuthTwoToken = (e) => {
    dispatch(setAuthTwoToken(e.target.value));
  };
  const authTwoHeaderPrefix = useSelector(
    (state) => state.restapi.request.auth.authTwo.headerPrefix
  );
  const handleAuthTwoHeaderPrefix = (e) => {
    dispatch(setAuthTwoHeaderPrefix(e.target.value));
  };
  const authTwoAutoRefreshToken = useSelector(
    (state) => state.restapi.request.auth.authTwo.autoRefreshToken
  );
  const handleAuthTwoAutoRefreshToken = (e) => {
    dispatch(setAuthTwoAutoRefreshToken(e.target.checked));
  };
  const authTwoShareToken = useSelector(
    (state) => state.restapi.request.auth.authTwo.shareToken
  );
  const handleAuthTwoShareToken = (e) => {
    dispatch(setAuthTwoShareToken(e.target.checked));
  };
  const authTwoNewTokenName = useSelector(
    (state) => state.restapi.request.auth.authTwo.newTokenName
  );
  const handleAuthTwoNewTokenName = (e) => {
    dispatch(setAuthTwoTokenName(e.target.value));
  };
  const authTwoGrantType = useSelector(
    (state) => state.restapi.request.auth.authTwo.grantType
  );
  const handleAuthTwoGrantType = (e) => {
    dispatch(setAuthTwoGrantType(e.target.value));
  };
  const authTwoCallbackUrl = useSelector(
    (state) => state.restapi.request.auth.authTwo.callbackUrl
  );
  const handleAuthTwoCallbackUrl = (e) => {
    dispatch(setAuthTwoCallbackUrl(e.target.value));
  };
  const authTwoAuthorizeUsingBrowser = useSelector(
    (state) => state.restapi.request.auth.authTwo.authorizeUsingBrowser
  );
  const handleAuthTwoAuthorizeUsingBrowser = (e) => {
    dispatch(setAuthTwoAuthorizeUsingBrowser(e.target.checked));
  };
  const authTwoAuthUrl = useSelector(
    (state) => state.restapi.request.auth.authTwo.authUrl
  );
  const handleAuthTwoAuthUrl = (e) => {
    dispatch(setAuthTwoAuthUrl(e.target.value));
  };
  const authTwoAccessTokenUrl = useSelector(
    (state) => state.restapi.request.auth.authTwo.accessTokenUrl
  );
  const handleAuthTwoAccessTokenUrl = (e) => {
    dispatch(setAuthTwoAccessTokenUrl(e.target.value));
  };
  const authTwoClientId = useSelector(
    (state) => state.restapi.request.auth.authTwo.clientId
  );
  const handleAuthTwoClientId = (e) => {
    dispatch(setAuthTwoClientId(e.target.value));
  };
  const authTwoClientSecret = useSelector(
    (state) => state.restapi.request.auth.authTwo.clientSecret
  );
  const handleAuthTwoClientSecret = (e) => {
    dispatch(setAuthTwoClientSecret(e.target.value));
  };
  const authTwoScope = useSelector(
    (state) => state.restapi.request.auth.authTwo.scope
  );
  const handleAuthTwoScope = (e) => {
    dispatch(setAuthTwoScope(e.target.value));
  };
  const authTwoState = useSelector(
    (state) => state.restapi.request.auth.authTwo.state
  );
  const handleAuthTwoState = (e) => {
    dispatch(setAuthTwoState(e.target.value));
  };
  const authTwoClientAuthentication = useSelector(
    (state) => state.restapi.request.auth.authTwo.clientAuthentication
  );
  const handleAuthTwoClientAuthentication = (e) => {
    dispatch(setAuthTwoClientAuthentication(e.target.value));
  };
  const authTwoRefreshTokenUrl = useSelector(
    (state) => state.restapi.request.auth.authTwo.refreshTokenUrl
  );
  const handleAuthTwoRefreshTokenUrl = (e) => {
    dispatch(setAuthTwoRefreshTokenUrl(e.target.value));
  };
  const authTwoAuthRequest = useSelector(
    (state) => state.restapi.request.auth.authTwo.authRequest
  );
  const handleAddAuthRequest = () => {
    if (newAuthRequestKey && newAuthRequestValue) {
      dispatch(
        setAuthTwoAuthRequest([
          ...authTwoAuthRequest,
          { key: newAuthRequestKey, value: newAuthRequestValue },
        ])
      );
      setNewAuthRequestKey("");
      setNewAuthRequestValue("");
    }
  };
  const authTwoTokenRequest = useSelector(
    (state) => state.restapi.request.auth.authTwo.tokenRequest
  );
  const handleAddTokenRequest = () => {
    if (newTokenRequestKey && newTokenRequestValue) {
      dispatch(
        setAuthTwoTokenRequest([
          ...authTwoTokenRequest,
          { key: newTokenRequestKey, value: newTokenRequestValue },
        ])
      );
      setNewTokenRequestKey("");
      setNewTokenRequestValue("");
    }
  };
  const authTwoRefreshRequest = useSelector(
    (state) => state.restapi.request.auth.authTwo.refreshRequest
  );
  const handleAddRefreshRequest = () => {
    if (newRefreshRequestKey && newRefreshRequestValue) {
      dispatch(
        setAuthTwoRefreshRequest([
          ...authTwoRefreshRequest,
          { key: newRefreshRequestKey, value: newRefreshRequestValue },
        ])
      );
      setNewRefreshRequestKey("");
      setNewRefreshRequestValue("");
    }
  };
  // const authTwoCookies = useSelector(
  //   (state) => state.restapi.request.auth.authTwo.cookies
  // );
  // const clearCookies = useSelector(
  //   (state) => state.restapi.request.auth.authTwo.clearCookies
  // );
  // const handleClearAuthTwoCookies = () => {
  //   dispatch(clearAuthTwoCookies());
  // };
  const authTwoNewAccessTokenRequest = useSelector(
    (state) => state.restapi.request.auth.authTwo.newAccessToken
  );
  // const getNewAccessToken = useSelector(
  //   (state) => state.restapi.request.auth.authTwo.getNewAccessToken
  // );
  const handleGetAuthTwoNewAccessToken = () => {
    dispatch(getAuthTwoNewAcessToken(authTwoNewAccessTokenRequest));
  };
  

  const renderAuthContent = () => {
    switch (authType) {
      case "No Auth":
        return (
          <p className="auth-message">
            This request does not use any authorization.{" "}
            <Link to="/auth" className="auth-link">
              Learn more about authorization
            </Link>
            .
          </p>
        );
      case "API Key":
        return (
          <div className="auth-fields">
            <div className="input-group">
              <label htmlFor="key">Key</label>
              <input
                value={apiKeyKey}
                onChange={handleApiKeyKey}
                id="key"
                className="postman-text-input"
                type="text"
                placeholder="Enter API key"
              />
            </div>
            <div className="input-group">
              <label htmlFor="value">Value</label>
              <input
                value={apiKeyValue}
                onChange={handleApiKeyValue}
                id="value"
                className="postman-text-input"
                type="text"
                placeholder="Enter value"
              />
            </div>
            <div className="input-group">
              <label htmlFor="add-to">Add to</label>
              <select
                className="postman-select"
                value={apiKeyAddTo}
                onChange={handleApiKeyAddTo}
                id="add-to"
              >
                <option value="header">Header</option>
                <option value="query">Query Params</option>
              </select>
            </div>
          </div>
        );
      case "Bearer Token":
        return (
          <div className="auth-fields">
            <div className="input-group">
              <label htmlFor="token">Token</label>
              <input
                value={bearerTokenToken}
                onChange={handleBearerTokenToken}
                id="token"
                type="text"
                className="postman-text-input"
                placeholder="Enter bearer token"
              />
            </div>
          </div>
        );
      case "Basic Auth":
        return (
          <div className="auth-fields">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={basicAuthUsername}
                onChange={handleBasicAuthUsername}
                type="text"
                className="postman-text-input"
                placeholder="Enter username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                className="postman-password-input"
                id="password"
                value={basicAuthPassword}
                onChange={handleBasicAuthPassword}
                type="password"
                placeholder="Enter password"
              />
            </div>
          </div>
        );
      case "OAuth 2.0":
        return (
          <div className="auth-fields">
            <div className="input-group">
              <label htmlFor="token">Token</label>
              <select
                className="postman-select"
                value={authTwoAvailableTokens}
                onChange={handleAuthTwoAvailableTokens}
                id="token"
              >
                <option value="Available Tokens">Available Tokens</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="token">Token</label>
              <input
                id="token"
                value={authTwoToken}
                onChange={handleAuthTwoToken}
                type="text"
                className="postman-text-input"
                placeholder="Token"
              />
            </div>
            <div className="input-group">
              <label htmlFor="header-prefix">
                Header Prefix <Info className="info-icon" />
              </label>
              <input
                value={authTwoHeaderPrefix}
                onChange={handleAuthTwoHeaderPrefix}
                id="header-prefix"
                type="text"
                className="postman-text-input"
                defaultValue="Bearer"
              />
            </div>
            <div className="toggle-group">
              <div className="toggle">
                <input
                  value={authTwoAutoRefreshToken}
                  onChange={handleAuthTwoAutoRefreshToken}
                  type="checkbox"
                  id="auto-refresh"
                />
                <label htmlFor="auto-refresh">Auto-refresh Token</label>
              </div>
              <p className="info-text">
                Your expired token will be auto-refreshed before sending a
                request.
              </p>
            </div>
            <div className="toggle-group">
              <div className="toggle">
                <input
                  value={authTwoShareToken}
                  onChange={handleAuthTwoShareToken}
                  type="checkbox"
                  id="share-token"
                />
                <label htmlFor="share-token">Share Token</label>
              </div>
              <p className="info-text">
                This will allow anyone with access to this request to view and
                use it.
              </p>
            </div>
            {showNewTokenConfig ? (
              <div className="new-token-config">
                <h3>Configure New Token</h3>
                <div className="input-group">
                  <label htmlFor="token-name">Token Name</label>
                  <input
                    value={authTwoNewTokenName}
                    onChange={handleAuthTwoNewTokenName}
                    id="token-name"
                    type="text"
                    className="postman-text-input"
                    placeholder="Enter a token name..."
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="grant-type">Grant Type</label>
                  <select
                    className="postman-select"
                    id="grant-type"
                    value={authTwoGrantType}
                    onChange={handleAuthTwoGrantType}
                  >
                    <option value="Authorization Code">
                      Authorization Code
                    </option>
                    <option value="Authorization Code with PKCE">
                      Authorization Code with PKCE
                    </option>
                    <option value="Implicit">Implicit</option>
                    <option value="Password Credentials">
                      Password Credentials
                    </option>
                    <option value="Client Credentials">
                      Client Credentials
                    </option>
                  </select>
                </div>
                <label htmlFor="Callback URL">
                  Callback URL <Info className="info-icon" />
                </label>
                <input
                  type="text"
                  className="postman-text-input"
                  id="CallbackURL"
                  value={authTwoCallbackUrl}
                  onChange={handleAuthTwoCallbackUrl}
                  placeholder="http://your-application.com/registered/callback"
                />
                <div className="checkbox-group">
                  <input
                    value={authTwoAuthorizeUsingBrowser}
                    onChange={handleAuthTwoAuthorizeUsingBrowser}
                    type="checkbox"
                    id="authorize-browser"
                  />
                  <label htmlFor="authorize-browser">
                    Authorize using browser
                  </label>
                </div>
                <div className="input-group">
                  <label htmlFor="auth-url">Auth URL</label>
                  <input
                    type="text"
                    id="auth-url"
                    className="postman-text-input"
                    value={authTwoAuthUrl}
                    onChange={handleAuthTwoAuthUrl}
                    placeholder="https://example.com/login/oauth/authorize"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="access-token-url">Access Token URL</label>
                  <input
                    id="access-token-url"
                    value={authTwoAccessTokenUrl}
                    onChange={handleAuthTwoAccessTokenUrl}
                    type="text"
                    className="postman-text-input"
                    placeholder="https://example.com/login/oauth/access_token"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="client-id">Client ID</label>
                  <input
                    id="client-id"
                    value={authTwoClientId}
                    onChange={handleAuthTwoClientId}
                    type="text"
                    className="postman-text-input"
                    placeholder="Client ID"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="client-secret">Client Secret</label>
                  <input
                    id="client-secret"
                    value={authTwoClientSecret}
                    onChange={handleAuthTwoClientSecret}
                    type="text"
                    className="postman-text-input"
                    placeholder="Client Secret"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="scope">Scope</label>
                  <input
                    id="scope"
                    value={authTwoScope}
                    onChange={handleAuthTwoScope}
                    type="text"
                    className="postman-text-input"
                    placeholder="Scope (e.g. read:org)"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    value={authTwoState}
                    onChange={handleAuthTwoState}
                    type="text"
                    className="postman-text-input"
                    placeholder="State"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="client-authentication">
                    Client Authentication
                  </label>
                  <select
                    className="postman-select"
                    id="client-authentication"
                    value={authTwoClientAuthentication}
                    onChange={handleAuthTwoClientAuthentication}
                  >
                    <option value="Send as Basic Auth header">
                      Send as Basic Auth header
                    </option>
                    <option value="Send as request body">
                      Send as request body
                    </option>
                  </select>
                </div>
                <button
                  onClick={() =>
                    setShowOAuth2AdvancedConfig(!showOAuth2AdvancedConfig)
                  }
                  className="link-button"
                >
                  <ChevronDown className="icon" />
                  Advanced
                </button>
                {showOAuth2AdvancedConfig && (
                  <>
                    <div className="input-group">
                      <label htmlFor="refresh-token-url">
                        Refresh Token URL
                      </label>
                      <input
                        id="refresh-token-url"
                        value={authTwoRefreshTokenUrl}
                        onChange={handleAuthTwoRefreshTokenUrl}
                        type="text"
                        className="postman-text-input"
                        placeholder="https://example.com/login/oauth/refresh_token"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="auth-request">Auth Request</label>
                      <div className="key-value-group">
                        {authTwoAuthRequest.map((request, index) => (
                          <div key={index} className="key-value">
                            <input
                              type="text"
                              className="postman-text-input"
                              value={request.key}
                              placeholder="Key"
                            />
                            <input
                              type="text"
                              className="postman-text-input"
                              value={request.value}
                              placeholder="Value"
                            />
                          </div>
                        ))}
                        <div className="key-value">
                          <input
                            type="text"
                            className="postman-text-input"
                            value={newAuthRequestKey}
                            onChange={(e) =>
                              setNewAuthRequestKey(e.target.value)
                            }
                            placeholder="Key"
                          />
                          <input
                            type="text"
                            className="postman-text-input"
                            value={newAuthRequestValue}
                            onChange={(e) =>
                              setNewAuthRequestValue(e.target.value)
                            }
                            placeholder="Value"
                          />
                          <button
                            className="add-params-button"
                            onClick={handleAddAuthRequest}
                          >
                            <img
                              width="30px"
                              height="24px"
                              alt="add-param-icon"
                              src={AddIcon}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="token-request">Token Request</label>
                      <div className="key-value-group">
                        {authTwoTokenRequest.map((request, index) => (
                          <div key={index} className="key-value">
                            <input
                              type="text"
                              className="postman-text-input"
                              value={request.key}
                              placeholder="Key"
                            />
                            <input
                              type="text"
                              className="postman-text-input"
                              value={request.value}
                              placeholder="Value"
                            />
                          </div>
                        ))}
                        <div className="key-value">
                          <input
                            type="text"
                            className="postman-text-input"
                            value={newTokenRequestKey}
                            onChange={(e) =>
                              setNewTokenRequestKey(e.target.value)
                            }
                            placeholder="Key"
                          />
                          <input
                            type="text"
                            className="postman-text-input"
                            value={newTokenRequestValue}
                            onChange={(e) =>
                              setNewTokenRequestValue(e.target.value)
                            }
                            placeholder="Value"
                          />
                          <button
                            className="add-params-button"
                            onClick={handleAddTokenRequest}
                          >
                            <img
                              src={AddIcon}
                              width="30px"
                              height="24px"
                              alt="add-param-icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="refresh-request">Refresh Request</label>
                      <div className="key-value-group">
                        {authTwoRefreshRequest.map((request, index) => (
                          <div key={index} className="key-value">
                            <input
                              type="text"
                              className="postman-text-input"
                              value={request.key}
                              placeholder="Key"
                            />
                            <input
                              type="text"
                              className="postman-text-input"
                              value={request.value}
                              placeholder="Value"
                            />
                          </div>
                        ))}
                        <div className="key-value">
                          <input
                            className="postman-text-input"
                            type="text"
                            value={newRefreshRequestKey}
                            onChange={(e) =>
                              setNewRefreshRequestKey(e.target.value)
                            }
                            placeholder="Key"
                          />
                          <input
                            type="text"
                            className="postman-text-input"
                            value={newRefreshRequestValue}
                            onChange={(e) =>
                              setNewRefreshRequestValue(e.target.value)
                            }
                            placeholder="Value"
                          />
                          <button
                            className="add-params-button"
                            onClick={handleAddRefreshRequest}
                          >
                            <img
                              src={AddIcon}
                              width="30px"
                              height="24px"
                              alt="add-param-icon"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="button-group">
                  {/* <button
                    onClick={handleClearAuthTwoCookies}
                    className="secondary-button"
                  >
                    Clear cookies
                  </button> */}
                  <button
                    onClick={handleGetAuthTwoNewAccessToken}
                    className="primary-button"
                  >
                    Get New Access Token
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="configure-token-button"
                onClick={() => setShowNewTokenConfig(true)}
              >
                Configure New Token
              </button>
            )}
          </div>
        );
      case "OAuth 1.0":
        return (
          <div className="auth-fields">
            <div className="input-group">
              <label htmlFor="signature-method">
                Signature Method <Info className="info-icon" />
              </label>
              <select
                className="postman-select"
                value={authOneSignatureMethod}
                onChange={handleAuthOneSignatureMethod}
                id="signature-method"
              >
                <option value="HMAC-SHA1">HMAC-SHA1</option>
                <option value="HMAC-SHA256">HMAC-SHA256</option>
                <option value="HMAC-SHA512">HMAC-SHA512</option>
                <option value={"RSA-SHA1"}>RSA-SHA1</option>
                <option value={"RSA-SHA256"}>RSA-SHA256</option>
                <option value={"RSA-SHA512"}>RSA-SHA512</option>
                <option value="PLAINTEXT">PLAINTEXT</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="consumer-key">
                Consumer Key <Info className="info-icon" />
              </label>
              <input
                value={authOneConsumerKey}
                onChange={handleAuthOneConsumerKey}
                id="consumer-key"
                type="text"
                className="postman-text-input"
                placeholder="Consumer Key"
              />
            </div>
            <div className="input-group">
              <label htmlFor="consumer-secret">
                Consumer Secret <Info className="info-icon" />
              </label>
              <input
                value={authOneConsumerSecret}
                onChange={handleAuthOneConsumerSecret}
                id="consumer-secret"
                type="text"
                className="postman-text-input"
                placeholder="Consumer Secret"
              />
            </div>
            <div className="input-group">
              <label htmlFor="access-token">
                Access Token <Info className="info-icon" />
              </label>
              <input
                value={authOneAccessToken}
                onChange={handleAuthOneAccessToken}
                id="access-token"
                type="text"
                className="postman-text-input"
                placeholder="Access Token"
              />
            </div>
            <div className="input-group">
              <label htmlFor="token-secret">
                Token Secret <Info className="info-icon" />
              </label>
              <input
                value={authOneTokenSecret}
                onChange={handleAuthOneTokenSecret}
                id="token-secret"
                type="text"
                className="postman-text-input"
                placeholder="Token Secret"
              />
            </div>
            <button
              onClick={() =>
                setShowOAuth1AdvancedConfig(!showOAuth1AdvancedConfig)
              }
              className="link-button"
            >
              <ChevronDown className="icon" />
              Advanced configuration
            </button>
            {showOAuth1AdvancedConfig && (
              <>
                <div className="input-group">
                  <label htmlFor="callback-url">
                    Callback URL <Info className="info-icon" />
                  </label>
                  <input
                    id="callback-url"
                    value={authOneCallbackURL}
                    onChange={handleAuthOneCallbackURL}
                    type="text"
                    className="postman-text-input"
                    placeholder="Callback URL"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="verifier">Verifier</label>
                  <input
                    id="verifier"
                    type="text"
                    className="postman-text-input"
                    value={authOneVerifier}
                    onChange={handleAuthOneVerifier}
                    placeholder="Verifier"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="timestamp">Timestamp</label>
                  <input
                    value={authOneTimestamp}
                    onChange={handleAuthOneTimestamp}
                    id="timestamp"
                    placeholder="Timestamp"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="nonce">Nonce</label>
                  <input
                    value={authOneNonce}
                    onChange={handleAuthOneNonce}
                    id="nonce"
                    placeholder="Nonce"
                    className="postman-text-input"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="version">Version</label>
                  <input
                    value={authOneVersion}
                    onChange={handleAuthOneVersion}
                    id="version"
                    type="text"
                    className="postman-text-input"
                    placeholder="Version"
                    defaultValue="1.0"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="realm">Realm</label>
                  <input
                    value={authOneRealm}
                    onChange={handleAuthOneRealm}
                    id="realm"
                    type="text"
                    className="postman-text-input"
                    placeholder="Realm"
                  />
                </div>
                <div className="checkbox-group">
                  <input
                    checked={authOneIncludeBodyHash}
                    onChange={handleAuthOneIncludeBodyHash}
                    type="checkbox"
                    id="include-body-hash"
                  />
                  <label htmlFor="include-body-hash">Include Body Hash</label>
                </div>
                <div className="checkbox-group">
                  <input
                    checked={authOneAddEmptyParametersToSignature}
                    onChange={handleAuthOneAddEmptyParametersToSignature}
                    type="checkbox"
                    id="add-empty-parameters"
                  />
                  <label htmlFor="add-empty-parameters-to-signature">
                    Add Empty Parameters to Signature
                  </label>
                </div>
              </>
            )}

            <div className="input-group">
              <label htmlFor="add-to">Add Authorization Data to</label>
              <select
                className="postman-select"
                value={authOneAddAuthorizationDataTo}
                onChange={handleAuthOneAddAuthorizationDataTo}
                id="add-to"
              >
                <option value="Request Headers">Request Headers</option>
                <option value="Request Body">Request Body</option>
              </select>
            </div>
          </div>
        );
      case "JWT Bearer":
        return (
          <div className="auth-fields">
            <div className="input-group">
              <label htmlFor="jwt-algorithm">Algorithm</label>
              <select
                className="postman-select"
                value={jwtBearerAlgorithm}
                onChange={handleJWTBearerAlgorithm}
                id="jwt-algorithm"
              >
                <option value="HS256">HS256</option>
                <option value="HS384">HS384</option>
                <option value="HS512">HS512</option>
                <option value="RS256">RS256</option>
                <option value="RS384">RS384</option>
                <option value="RS512">RS512</option>
                <option value="PS256">ES256</option>
                <option value="PS384">ES384</option>
                <option value="PS512">ES512</option>
                <option value="ES256">ES256</option>
                <option value="ES384">ES384</option>
                <option value="ES512">ES512</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="jwt-secret">Secret</label>
              <input
                value={jwtBearerSecret}
                onChange={handleJWTBearerSecret}
                id="jwt-secret"
                type="text"
                className="postman-text-input"
                placeholder="Enter secret"
              />
            </div>
            <div className="checkbox-group">
              <input
                checked={jwtBearerSecretBase64Encoded}
                onChange={handleJWTBearerSecretBase64Encoded}
                type="checkbox"
                id="secret-base64"
              />
              <label htmlFor="secret-base64">Secret Base64 encoded</label>
            </div>
            <div className="input-group">
              <label htmlFor="jwt-payload">Payload</label>
              <textarea
                className="postman-textarea"
                value={jwtBearerPayload}
                onChange={handleJWTBearerPayload}
                id="jwt-payload"
                placeholder="{}"
              />
            </div>

            <button
              onClick={() =>
                setShowJWTBearerAdvancedConfig(!showJWTBearerAdvancedConfig)
              }
              className="link-button"
            >
              <ChevronDown className="icon" />
              Advanced configuration
            </button>
            {showJWTBearerAdvancedConfig && (
              <>
                <div className="input-group">
                  <label htmlFor="jwt-header-prefix">
                    Request Header Prefix
                  </label>
                  <input
                    value={jwtBearerRequestHeaderPrefix}
                    onChange={handleJWTBearerRequestHeaderPrefix}
                    id="jwt-header-prefix"
                    type="text"
                    className="postman-text-input"
                    defaultValue="Bearer"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="jwt-headers">JWT headers</label>
                  <textarea
                    className="postman-textarea"
                    value={jwtBearerJWTHeaders}
                    onChange={handleJWTBearerJWTHeaders}
                    id="jwt-headers"
                    placeholder="{}"
                  />
                </div>
              </>
            )}
            <div className="input-group">
              <label htmlFor="jwt-add-to">Add JWT token to</label>
              <select
                className="postman-select"
                value={jwtBearerAddJWTTokenTo}
                onChange={handleJWTBearerAddJWTTokenTo}
                id="jwt-add-to"
              >
                <option value="RequestHeader">Request Header</option>
                <option value="RequestBody">Request Body</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="auth-type-select">
          <label htmlFor="auth-type">Auth Type</label>
          <select
            className="postman-select"
            id="auth-type"
            value={authType}
            onChange={handleAuthTypeChange}
          >
            <option value="No Auth">No Auth</option>
            <option value="API Key">API Key</option>
            <option value="Bearer Token">Bearer Token</option>
            <option value="Basic Auth">Basic Auth</option>
            <option value="OAuth 2.0">OAuth 2.0</option>
            <option value="OAuth 1.0">OAuth 1.0</option>
            <option value="JWT Bearer">JWT Bearer</option>
          </select>
        </div>
      </div>
      <div className="auth-content">{renderAuthContent()}</div>
    </div>
  );
};

export default AuthSection;
