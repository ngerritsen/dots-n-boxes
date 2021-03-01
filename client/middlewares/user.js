import socket from "../socket";
import events from "../../shared/events";
import { register, updateName } from "../slices/user";
import * as user from "../storage/user";
import { notify } from "../slices/notification";
import { getToken } from "../selectors";

export default ({ dispatch, getState }) => (next) => {
  setTimeout(() => {
    dispatch(
      updateName({
        name: user.getName(),
      })
    );
  });

  socket.emit(events.register, {
    token: user.getToken(),
    name: user.getName()
  });

  socket.on(events.registerSucceeded, (data) => {
    user.setToken(data.token);
    dispatch(register({ token: data.token }));
  });

  socket.on(events.updateNameFailed, (data) => {
    dispatch(notify({ message: "Failed to update name: " + data.message, type: "error" }));
  });

  socket.on(events.registerFailed, (data) => {
    dispatch(
      notify({ message: "Registering failed: " + data.message, type: "error" })
    );
  });

  return (action) => {
    if (action.type === String(updateName)) {
      user.setName(action.payload.name);

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
