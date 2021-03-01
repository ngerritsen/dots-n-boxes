import { notify, clear } from "../slices/notification";

const NOTIFICATION_TIMEOUT = 3000;

let timeout;

export default (store) => (next) => (action) => {
  if (action.type === String(notify)) {
    clearTimeout(timeout);
    timeout = setTimeout(() => store.dispatch(clear()), NOTIFICATION_TIMEOUT);
  }

  return next(action);
};
