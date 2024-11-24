import { RestAPIActionTypes } from "../constants/RESTAPIActionTypes";

// Action Creators
export const setRequest = (request) => {
    return {
        type: RestAPIActionTypes.SET_REQUEST,
        payload: request
    };
};

export const setResponse = (response) => {
    return {
        type: RestAPIActionTypes.SET_RESPONSE,
        payload: response
    };
}

export const setURL = (url) => {
    return {
        type: RestAPIActionTypes.SET_URL,
        payload: url
    };
}

export const setMethod = (method) => {
    return {
        type: RestAPIActionTypes.SET_METHOD,
        payload: method
    };
}

export const setHeaders = (headers) => {
    return {
        type: RestAPIActionTypes.SET_HEADERS,
        payload: headers
    };
}

export const setBody = (body) => {
    return {
        type: RestAPIActionTypes.SET_BODY,
        payload: body
    };
}

export const setParams = (params) => {
    return {
        type: RestAPIActionTypes.SET_PARAMS,
        payload: params
    };
}

export const addToHistory = (request) => {
    return {
        type: RestAPIActionTypes.ADD_TO_HISTORY,
        payload: request
    };
}

export const clearHistory = () => {
    return {
        type: RestAPIActionTypes.CLEAR_HISTORY
    };
}



export const setRequestName = (name) => {
    return {
        type: RestAPIActionTypes.SET_REQUEST_NAME,
        payload: name
    };
}


export const saveRequest = (request) => {
    return {
        type: RestAPIActionTypes.ADD_TO_HISTORY,
        payload: request
    };
}

export const setAuthType = (type) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TYPE,
        payload: type
    };
}

export const setBasicAuthUsername = (username) => {
    return {
        type: RestAPIActionTypes.SET_BASIC_AUTH_USERNAME,
        payload: username
    };
}

export const setBasicAuthPassword = (password) => {
    return {
        type: RestAPIActionTypes.SET_BASIC_AUTH_PASSWORD,
        payload: password
    };
}

export const setBearerTokenToken = (token) => {
    return {
        type: RestAPIActionTypes.SET_BEARER_TOKEN_TOKEN,
        payload: token
    };
}

export const setJWTBearerAlgorithm = (algorithm) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_ALGORITHM,
        payload: algorithm
    };
}

export const setJWTBearerSecret = (secret) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_SECRET,
        payload: secret
    };
}

export const setJWTBearerSecretBase64Encoded = (encoded) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_SECRET_BASE64_ENCODED,
        payload: encoded
    };
}

export const setJWTBearerPayload = (payload) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_PAYLOAD,
        payload: payload
    };
}

export const setJWTBearerRequestHeaderPrefix = (prefix) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_REQUEST_HEADER_PREFIX,
        payload: prefix
    };
}

export const setJWTBearerJWTHeaders = (headers) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_JWT_HEADERS,
        payload: headers
    };
}

export const setJWTBearerAddJWTTokenTo = (add) => {
    return {
        type: RestAPIActionTypes.SET_JWT_BEARER_ADD_JWT_TOKEN_TO,
        payload: add
    };
}

export const setAuthOneSignatureMethod = (method) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_SIGNATURE_METHOD,
        payload: method
    };
}

export const setAuthOneConsumerKey = (key) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_CONSUMER_KEY,
        payload: key
    };
}

export const setAuthOneConsumerSecret = (secret) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_CONSUMER_SECRET,
        payload: secret
    };
}

export const setAuthOneAccessToken = (token) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_ACCESS_TOKEN,
        payload: token
    };
}

export const setAuthOneTokenSecret = (secret) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_TOKEN_SECRET,
        payload: secret
    };
}

export const setAuthOneCallbackURL = (url) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_CALLBACK_URL,
        payload: url
    };
}

export const setAuthOneVerifier = (verifier) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_VERIFIER,
        payload: verifier
    };
}

export const setAuthOneTimestamp = (timestamp) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_TIMESTAMP,
        payload: timestamp
    };
}

export const setAuthOneNonce = (nonce) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_NONCE,
        payload: nonce
    };
}

export const setAuthOneRealm = (realm) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_REALM,
        payload: realm
    };
}

export const setAuthOneVersion = (version) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_VERSION,
        payload: version
    };
}

export const setAuthOneIncludeBodyHash = (include) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_INCLUDE_BODY_HASH,
        payload: include
    };
}

export const setAuthOneAddEmptyParametersToSignature = (add) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_ADD_EMPTY_PARAMETERS_TO_SIGNATURE,
        payload: add
    };
}

export const setAuthOneAddAuthorizationDataTo = (add) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_ONE_ADD_AUTHORIZATION_DATA_TO,
        payload: add
    };
}

export const setAuthTwoAvailableTokens = (tokens) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_AVAILABLE_TOKENS,
        payload: tokens
    };
}

export const setAuthTwoToken = (token) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_TOKEN,
        payload: token
    };
}

export const setAuthTwoHeaderPrefix = (prefix) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_HEADER_PREFIX,
        payload: prefix
    };
}

export const setAuthTwoAutoRefreshToken = (refresh) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_AUTO_REFRESH_TOKEN,
        payload: refresh
    };
}

export const setAuthTwoShareToken = (share) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_SHARE_TOKEN,
        payload: share
    };
}

export const setAuthTwoTokenName = (name) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_TOKEN_NAME,
        payload: name
    };
}

export const setAuthTwoGrantType = (type) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_GRANT_TYPE,
        payload: type
    };
}

export const setAuthTwoCallbackUrl = (url) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_CALLBACK_URL,
        payload: url
    };
}

export const setAuthTwoAuthorizeUsingBrowser = (authorize) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_AUTHORIZE_USING_BROWSER,
        payload: authorize
    };
}

export const setAuthTwoAuthUrl = (url) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_AUTH_URL,
        payload: url
    };
}

export const setAuthTwoAccessTokenUrl = (url) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_ACCESS_TOKEN_URL,
        payload: url
    };
}

export const setAuthTwoClientId = (id) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_CLIENT_ID,
        payload: id
    };
}

export const setAuthTwoClientSecret = (secret) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_CLIENT_SECRET,
        payload: secret
    };
}

export const setAuthTwoScope = (scope) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_SCOPE,
        payload: scope
    };
}

export const setAuthTwoState = (state) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_STATE,
        payload: state
    };
}

export const setAuthTwoClientAuthentication = (authentication) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_CLIENT_AUTHENTICATION,
        payload: authentication
    };
}

export const setAuthTwoRefreshTokenUrl = (url) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_REFRESH_TOKEN_URL,
        payload: url
    };
}

export const setAuthTwoAuthRequest = (request) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_AUTH_REQUEST,
        payload: request
    };
}

export const setAuthTwoTokenRequest = (request) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_TOKEN_REQUEST,
        payload: request
    };
}

export const setAuthTwoRefreshRequest = (request) => {
    return {
        type: RestAPIActionTypes.SET_AUTH_TWO_REFRESH_REQUEST,
        payload: request
    };
}

export const clearAuthTwoCookies = () => {
    return {
        type: RestAPIActionTypes.CLEAR_AUTH_TWO_COOKIES
    };
}

export const getAuthTwoNewAcessToken = (request) => {
    return {
        type: RestAPIActionTypes.GET_AUTH_TWO_NEW_ACCESS_TOKEN,
        payload: request
    };
}

export const setApiKeyKey = (key) => {
    return {
        type: RestAPIActionTypes.SET_API_KEY_KEY,
        payload: key
    };
}

export const setApiKeyValue = (value) => {
    return {
        type: RestAPIActionTypes.SET_API_KEY_VALUE,
        payload: value
    };
}

export const setApiKeyAddTo = (add) => {
    return {
        type: RestAPIActionTypes.SET_API_KEY_ADD_TO,
        payload: add
    };
}
