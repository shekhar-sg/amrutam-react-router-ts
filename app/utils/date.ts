import dayjs from "dayjs";

export const getCurrentDateTime = () => {
  return dayjs().format("DD-YYYY-MM HH:mm:ss");
}