import axios from "axios";

const instance = axios.create({
  baseURL: "https://socialnetworkserver.up.railway.app",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
