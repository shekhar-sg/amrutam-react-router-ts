import axios from "axios";
import { logger } from "~/utils/logger";

export const storeClient = axios.create({
  baseURL: `${process.env.SHOPIFY_BASE_URL}/api/v1`,
});

storeClient.interceptors.request.use((config) => {
  logger.log(config.url);
  return config;
});

storeClient.interceptors.response.use(
  (response) => {
    logger.log(response.data);
    return response;
  },
  (error) => {
    logger.error(error);
    return Promise.reject(error);
  },
);
