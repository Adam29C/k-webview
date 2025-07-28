import axios from "axios";
import { baseUrl } from "./baseurl";

const dataservice = axios.create({
  baseURL: baseUrl,
});

dataservice.interceptors.request.use(
  (config) => {
    const token1 = localStorage.getItem("token1");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData?.token;

    console.log("browse logi token token1", token1);
    console.log("app login token", token);

    const manageToken = token1 || token;

    if (manageToken) {
      // Token exists, do something
      console.log("Token found:", manageToken);
    } else {
      // No token found, handle accordingly
      console.log("No token found");
    }

    config.headers.Authorization = `Bearer ${manageToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default dataservice;
