import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2";
import tsconfigPaths from "vite-tsconfig-paths";
import { isProduction } from "./app/utils/environment";

export default defineConfig(() => {
  return {
    plugins: [
      reactRouter(),
      tailwindcss(),
      tsconfigPaths(),
      compression({
        algorithm:"brotliCompress"
      }),
      visualizer({
        open: !isProduction,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    build: {
      ssrManifest: true,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      },
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
