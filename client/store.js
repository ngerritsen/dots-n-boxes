import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { connectRouter, routerMiddleware } from "connected-react-router";
import game from "./slices/game";
import notification from "./slices/notification";
import gameMiddleware from "./middlewares/game";
import notificationMiddleware from "./middlewares/notification";
import history from "./history";

export default configureStore({
  reducer: {
    game,
    notification,
    router: connectRouter(history),
  },
  middleware: [
    gameMiddleware,
    notificationMiddleware,
    routerMiddleware(history),
    createLogger({ collapsed: true }),
  ],
});
