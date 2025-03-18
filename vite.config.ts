import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import svgR from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [tailwindcss(), reactRouter(), svgR(), tsconfigPaths()],
    esbuild: {},
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
