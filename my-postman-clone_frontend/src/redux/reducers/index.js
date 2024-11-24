import {combineReducers} from 'redux';

import {RESTAPIReducer} from './RESTAPIReducer';

const reducers = combineReducers({
    restapi: RESTAPIReducer
})

export default reducers;