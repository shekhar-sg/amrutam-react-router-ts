import { redirect } from "react-router";
import type { Route } from "~/route-types/types/app/routes/_base-layout+/shop+/_shop-layout+/_category-layout+/+types";
import { doubleSlashRemover } from "~/utils/request";

export const loader = async ({ request }: Route.LoaderArgs) => {
  return redirect(doubleSlashRemover(`${request.url}/all`).url, {
    headers: request.headers,
    status: 301,
    statusText: "Moved Permanently",
  });
};
