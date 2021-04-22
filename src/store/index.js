import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import collectionReducer from './collection.reducer.js';
// import storeReducer from './store.reducer.js';

import thunk from 'redux-thunk';

let reducers = combineReducers({
  collection: collectionReducer,
  // store: storeReducer
});

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
