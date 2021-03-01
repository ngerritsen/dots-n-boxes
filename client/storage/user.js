export const setToken = (token) => localStorage.setItem("user/token", token);
export const getToken = () => localStorage.getItem("user/token");
export const setName = (name) => localStorage.setItem("user/name", name);
export const getName = () => localStorage.getItem("user/name");
