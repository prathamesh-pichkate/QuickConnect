import axios from "axios";

const baseURL =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_EC2;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
