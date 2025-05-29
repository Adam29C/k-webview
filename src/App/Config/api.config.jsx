import axios from "axios";
import { baseUrl } from "./baseurl";

const dataservice = axios.create({
  baseURL: baseUrl,
});

dataservice.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default dataservice;
