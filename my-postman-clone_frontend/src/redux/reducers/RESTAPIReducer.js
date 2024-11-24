import { RestAPIActionTypes } from "../constants/RESTAPIActionTypes";

// Initial State
const initialState = {
    request: {
        url: '',
        method: 'GET',
        headers: [],
        body: '',
        params: [],
        requestName: 'Untitled Request',
        auth: {
            type:'No Auth',
            basicAuth: {
                username: '',
                password: ''
            },
            bearerToken: {
                token: ''
            },
            jwtBearer: {
                algorithm: '',
                secret: '',
                secretBase64Encoded: false,
                payload: '',
                requestHeaderPrefix: '',
                jwtHeaders: '',
                addJWTTokenTo: ''
            },
            authOne: {
                signatureMethod: '',
                consumerKey: '',
                consumerSecret: '',
                accessToken: '',
                tokenSecret: '',
                callbackURL: '',
                verifier: '',
                timestamp: '',
                nonce: '',
                realm: '',
                version: '',
                includeBodyHash: false,
                addEmptyParametersToSignature: false,
                addAuthorizationDataTo: ''
            },
            authTwo: {
                availableTokens: '',
                token: '',
                headerPrefix: '',
                autoRefreshToken: false,
                shareToken: false,
                tokenName: '',
                grantType: '',
                callbackURL: '',
                authorizeUsingBrowser: false,
                authURL: '',
                accessTokenURL: '',
                clientID: '',
                clientSecret: '',
                scope: '',
                state: '',
                clientAuthentication: '',
                refreshTokenURL: '',
                authRequest: [],
                tokenRequest: [],
                refreshRequest: [],
                cookies: [],
                newAccessToken: '',
                clearCookies: false,
                getNewAccessToken: false,
                addAuthorizationDataTo: ''
            },
            apiKey:{
                key: '',
                value: '',
                addTo: ''
            }
        },
    },
    response: {},
    history: []
};


// Reducer
export const RESTAPIReducer = (state = initialState, action) => {
    switch (action.type) {
        case RestAPIActionTypes.SET_REQUEST:
            return {
                ...state,
                request: action.payload
            };
        case RestAPIActionTypes.SET_RESPONSE:
            return {
                ...state,
                response: action.payload
            };
        case RestAPIActionTypes.SET_URL:
            return {
                ...state,
                request: {
                    ...state.request,
                    url: action.payload
                }
            };
        case RestAPIActionTypes.SET_METHOD:
            return {
                ...state,
                request: {
                    ...state.request,
                    method: action.payload
                }
            };
        case RestAPIActionTypes.SET_HEADERS:
            return {
                ...state,
                request: {
                    ...state.request,
                    headers: action.payload
                }
            };
        case RestAPIActionTypes.SET_BODY:
            return {
                ...state,
                request: {
                    ...state.request,
                    body: action.payload
                }
            };
        case RestAPIActionTypes.SET_PARAMS:
            return {
                ...state,
                request: {
                    ...state.request,
                    params: action.payload
                }
            };
        case RestAPIActionTypes.ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case RestAPIActionTypes.CLEAR_HISTORY:
            return {
                ...state,
                history: []
            };
        case RestAPIActionTypes.SET_REQUEST_NAME:
            return {
                ...state,
                request: {
                    ...state.request,
                    requestName: action.payload
                }
            };
        case RestAPIActionTypes.SAVE_REQUEST:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case RestAPIActionTypes.SET_AUTH_TYPE:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        type: action.payload
                    }
                }
            };
        case RestAPIActionTypes.SET_BASIC_AUTH_USERNAME:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        basicAuth: {
                            ...state.request.auth.basicAuth,
                            username: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_BASIC_AUTH_PASSWORD:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        basicAuth: {
                            ...state.request.auth.basicAuth,
                            password: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_BEARER_TOKEN_TOKEN:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        bearerToken: {
                            ...state.request.auth.bearerToken,
                            token: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_ALGORITHM:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            algorithm: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_SECRET:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            secret: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_SECRET_BASE64_ENCODED:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            secretBase64Encoded: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_PAYLOAD:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            payload: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_REQUEST_HEADER_PREFIX:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            requestHeaderPrefix: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_JWT_HEADERS:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            jwtHeaders: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_JWT_BEARER_ADD_JWT_TOKEN_TO:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        jwtBearer: {
                            ...state.request.auth.jwtBearer,
                            addJWTTokenTo: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_SIGNATURE_METHOD:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            signatureMethod: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_CONSUMER_KEY:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            consumerKey: action.payload
                        }
                    }
                }
            };      
        case RestAPIActionTypes.SET_AUTH_ONE_CONSUMER_SECRET:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            consumerSecret: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_ACCESS_TOKEN:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            accessToken: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_TOKEN_SECRET:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            tokenSecret: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_CALLBACK_URL:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            callbackURL: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_VERIFIER:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            verifier: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_TIMESTAMP:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            timestamp: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_NONCE:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            nonce: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_REALM:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            realm: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_VERSION:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            version: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_INCLUDE_BODY_HASH:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            includeBodyHash: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_ADD_EMPTY_PARAMETERS_TO_SIGNATURE:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            addEmptyParametersToSignature: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_ONE_ADD_AUTHORIZATION_DATA_TO:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authOne: {
                            ...state.request.auth.authOne,
                            addAuthorizationDataTo: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_AVAILABLE_TOKENS:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            availableTokens: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_TOKEN:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            token: action.payload
                        }
                    }
                }
            };      
        case RestAPIActionTypes.SET_AUTH_TWO_HEADER_PREFIX:

            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            headerPrefix: action.payload
                        }
                    }
                }
            }
        case RestAPIActionTypes.SET_AUTH_TWO_AUTO_REFRESH_TOKEN:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            autoRefreshToken: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_SHARE_TOKEN:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            shareToken: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_TOKEN_NAME:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            tokenName: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_GRANT_TYPE:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            grantType: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_CALLBACK_URL:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            callbackURL: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_AUTHORIZE_USING_BROWSER:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            authorizeUsingBrowser: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_AUTH_URL:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            authURL: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_ACCESS_TOKEN_URL:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            accessTokenURL: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_CLIENT_ID:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            clientID: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_CLIENT_SECRET:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            clientSecret: action.payload
                        }
                    }
                }
            };     
        case RestAPIActionTypes.SET_AUTH_TWO_SCOPE:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            scope: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_CLIENT_AUTHENTICATION:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            clientAuthentication: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_REFRESH_TOKEN_URL:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            refreshTokenURL: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_AUTH_REQUEST:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            authRequest: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_TOKEN_REQUEST:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            tokenRequest: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_AUTH_TWO_REFRESH_REQUEST:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            refreshRequest: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.CLEAR_AUTH_TWO_COOKIES:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            cookies: []
                        }
                    }
                }
            };
        case RestAPIActionTypes.GET_AUTH_TWO_NEW_ACCESS_TOKEN:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        authTwo: {
                            ...state.request.auth.authTwo,
                            newAccessToken: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_API_KEY_KEY:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        apiKey: {
                            ...state.request.auth.apiKey,
                            key: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_API_KEY_VALUE:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        apiKey: {
                            ...state.request.auth.apiKey,
                            value: action.payload
                        }
                    }
                }
            };
        case RestAPIActionTypes.SET_API_KEY_ADD_TO:
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        apiKey: {
                            ...state.request.auth.apiKey,
                            addTo: action.payload
                        }
                    }
                }
            };
        default:
            return state;
    }
};

