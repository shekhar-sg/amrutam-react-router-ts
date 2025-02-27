import { getCurrentDateTime } from "~/utils/date";

export const logger = {
  log: (...args: unknown[]) => {
    args.unshift(`[${getCurrentDateTime()}]`);
    console.log(...args);
  },
  error: (...args: unknown[]) => {
    args.unshift(`[${getCurrentDateTime()}]`);
    console.error(...args);
  },
};


