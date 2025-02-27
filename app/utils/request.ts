export const doubleSlashRemover = (url: string) => {
  const regex = /\/{2,}/g;
  const doubleSlashCount = url.match(regex)?.length ?? 0;
  const result = {
    url: url,
    doubleSlashCount,
  };
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const [protocol, ...rest] = url.split("//");
    result.url = `${protocol}//${rest.join("/")}`;
    result.doubleSlashCount -= 1;
  } else {
    result.url = url.replace(regex, "/");
  }
  return result;
};
