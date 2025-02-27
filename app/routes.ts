import { type RouteConfig } from "@react-router/dev/routes";
import flatRoutes from "remix-flat-routes";
import { remixRoutesOptionAdapter } from "@react-router/remix-routes-option-adapter";

export default remixRoutesOptionAdapter((defineRoutes) => {
  return flatRoutes("routes", defineRoutes, {
    ignoredRouteFiles: ["**/.*"], // Ignore dot files (like .DS_Store)
  });
}) satisfies RouteConfig;
