import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../components/reducers";

export const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;