import axios from "axios";
import { logger } from "~/utils/logger";

export const backendClient = axios.create({
    baseURL: `${process.env.BACKEND_BASE_URL}/api/v1`,
});

backendClient.interceptors.request.use((config) => {
  logger.log(config.url);
  return config;
});

backendClient.interceptors.response.use(
  (response) => {
    logger.log(response.data);
    return response;
  },
  (error) => {
    logger.error(error);
    return Promise.reject(error);
  },
);

