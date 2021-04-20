import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import collectionReducer from './collection.reducer.js';

import thunk from 'redux-thunk';

let reducers = combineReducers({
  collection: collectionReducer
});

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
