import axios from "axios";
import env from "../../config/env";
import { getToken } from "../utils/storage";

const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const isLoggingEnabled = env.APP_ENV === "development";

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token: string | null = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (isLoggingEnabled) {
      const url = config.url ? config.url.split("?")[0] : "";
      console.log(`Request -> ${url}\n`, config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); //NOSONAR
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (isLoggingEnabled) {
      const url = response.config.url ? response.config.url.split("?")[0] : "";
      console.log(`Response -> ${url}\n`, response);
    }
    return response;
  },
  (error: any) => {
    return Promise.reject(error?.response?.data ?? error); //NOSONAR
  }
);

export default axiosInstance;
