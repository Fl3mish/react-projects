import { getTokenSessionStorage } from "./user";

const { VITE_API_BASE_URL } = import.meta.env;

const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${getTokenSessionStorage()}`,
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;
