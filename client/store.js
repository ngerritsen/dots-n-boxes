import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import game from "./slices/game";
import user from "./slices/user";
import notification from "./slices/notification";
import gameMiddleware from "./middlewares/game";
import userMiddleware from "./middlewares/user";
import notificationMiddleware from "./middlewares/notification";

export default configureStore({
  reducer: {
    game,
    notification,
    user,
  },
  middleware: [
    gameMiddleware,
    notificationMiddleware,
    userMiddleware,
    createLogger({ collapsed: true }),
  ],
});
