export const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number,
) => {
  let timer: NodeJS.Timeout;
  return function (...args: Parameters<T>): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
