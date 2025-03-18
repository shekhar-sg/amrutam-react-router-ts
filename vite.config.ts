import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { isProduction } from "./app/utils/environment";

export default defineConfig(() => {
  return {
    plugins: [
      reactRouter(),
      tailwindcss(),
      tsconfigPaths(),
      visualizer({
        open: !isProduction,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    build: {
      ssrManifest: true,
    },
    server: {
      proxy: {
        "/api/store": {
          target: process.env.SHOPIFY_BASE_URL!,
          changeOrigin: true,
          rewrite: (path) => path.replace("/api/store", "/api"),
        },
        "/api/backend": {
          target: process.env.BACKEND_BASE_URL!,
          changeOrigin: true,
          rewrite: (path) => path.replace("/api/backend", "/api"),
        },
      },
    },
  };
});
