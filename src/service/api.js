import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const post = async (url, params) => {
  return await api.post(url, params);
};

const get = async (url) => {
  return await api.get(url);
};

const update = async (url, params) => {
  return await api.put(url, params);
};

const exclude = async (url) => {
  return await api.delete(url);
};

export { post, get, update, exclude };
