import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import gameReducer from "./reducers/game";

const logger = createLogger();
const store = createStore(gameReducer, applyMiddleware(logger));

export default store;
