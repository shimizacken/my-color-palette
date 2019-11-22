import { createStore, compose, combineReducers } from "redux";
import { colors, users } from "./reducers";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(
  combineReducers({ colors, users }),
  {},
  composeEnhancers()
);

window.MY_STORE = store;
