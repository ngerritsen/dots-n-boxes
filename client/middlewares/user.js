import socket from "../socket";
import events from "../../shared/events";
import { register, submitName } from "../slices/user";
import * as user from "../storage/user";
import { notify } from "../slices/notification";
import { getToken } from "../selectors";

export default ({ dispatch, getState }) => (next) => {
  socket.emit(events.register, {
    token: user.getToken(),
  });

  socket.on(events.registerSucceeded, (data) => {
    user.setToken(data.token);
    dispatch(
      register({
        token: data.token,
        name: data.name,
      })
    );
  });

  socket.on(events.updateNameSucceeded, () => {
    dispatch(
      notify({
        message: "Name updated.",
        type: "sucess",
      })
    );
  });

  socket.on(events.updateNameFailed, (data) => {
    dispatch(
      notify({
        message: "Failed to update name: " + data.message,
        type: "error",
      })
    );
  });

  socket.on(events.registerFailed, (data) => {
    dispatch(
      notify({ message: "Registering failed: " + data.message, type: "error" })
    );
  });

  return (action) => {
    if (action.type === String(submitName)) {
      if (getToken(getState())) {
        socket.emit(events.updateName, {
          token: getToken(getState()),
          name: action.payload.name,
        });
      }
    }

    return next(action);
  };
};
