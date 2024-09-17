import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", { username, password });

export const createSession = ({ username, password }) =>
  apiFetch("POST", "/users/session", { username, password });

// Set token in local storage -> logged in
export const setTokenSessionStorage = (token) =>
  localStorage.setItem("token", token);

// Get token from local storage -> Logged in
export const getTokenSessionStorage = () => localStorage.getItem("token");

// Delete token from local storage -> Signed out
export const removeTokenSessionStorage = () => localStorage.removeItem("token");
