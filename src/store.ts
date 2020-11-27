import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import global from './reducers/global';

const middleware = [thunk];

const rootReducer = combineReducers({
  global,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
