import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./combinedReducers.js";
import thunk from "redux-thunk";
// const {setPort, setItemsToSend, setServerOn} = require('../../public/xmainWindow.js');
// import {setURLFilePath} from '../../src/main/xserver/xroutes/xroutes.js';
// import * as types from './actionTypes.js';

// const savePort = store => next => action => {
//   if (action.type === types.SET_PORT) setPort(action.payload);
//   return next(action);
// }
// const getServerStatus = store => next => action => {
//   if (action.type === types.TOGGLE_SERVER) setServerOn(action.payload);
//   return next(action);
// }
// const getItemsToSend = store => next => action => {
//   if (action.type === types.HOSTED_ITEMS) setItemsToSend(action.payload);
//   return next(action);
// }
// const getBodyItemURL = store => next => action => {
//   if (action.type === types.CREATE_BODY_FROM_SOURCE && action.payload.customRoute) setURLFilePath(action.payload.customRoute);
//   return next(action);
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunk,
      // savePort,
      // getServerStatus,
      // getItemsToSend,
      // getBodyItemURL
    )
  )
);
export default store;
