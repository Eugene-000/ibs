import axios from "axios";
import { SERVER_URL } from "../constants/routes";

export const HttpClient = axios.create({
  baseURL: SERVER_URL,
});

HttpClient.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HttpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
