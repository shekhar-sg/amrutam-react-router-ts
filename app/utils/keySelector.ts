export const keySelector = <T>(
  data: T,
  selector: ((data: T) => string) | keyof T,
) => {
  return String(
    typeof selector === "function" ? selector(data) : String(data[selector]),
  );
};
