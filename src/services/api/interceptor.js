import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const userToken = JSON.parse(localStorage.getItem("token"));

    if (accessToken) {
      if (config.headers) config.headers.accessToken = accessToken;
    }
    if (userToken) {
      if (config.headers) config.headers.userToken = userToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
