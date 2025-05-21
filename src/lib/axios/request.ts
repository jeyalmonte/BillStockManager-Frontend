import { AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./instance";

interface Props {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  params?: string | Record<string, any>;
  data?: any;
  headers?: Record<string, string>;
}

const request = async ({
  method,
  url,
  params,
  data,
  headers,
}: Props): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    headers: {
      ...headers,
    },
  };

  const response = await axiosInstance.request(config);
  return response;
};

export default request;
