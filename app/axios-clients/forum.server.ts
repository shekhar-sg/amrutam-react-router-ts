import axios from "axios";
import { logger } from "~/utils/logger";

export const forumClient = axios.create({
  baseURL: `${process.env.FORUM_BASE_URL}/api/v1`,
});

forumClient.interceptors.request.use((config) => {
  logger.log(config.url);
  return config;
});

forumClient.interceptors.response.use(
  (response) => {
    logger.log(response.data);
    return response;
  },
  (error) => {
    logger.error(error);
    return Promise.reject(error);
  },
);
