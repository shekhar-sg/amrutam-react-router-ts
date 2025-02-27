import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgR from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import { type Productions, productions } from "./app/utils/environment";

export default defineConfig(({ mode }) => {
  return {
    plugins: [tailwindcss(), reactRouter(), svgR(), tsconfigPaths()],
    esbuild: {
      drop: productions.includes(mode.toLowerCase() as Productions)
        ? ["console", "debugger"]
        : undefined,
    },
    server: {
      proxy: {
        "/api/store": {
          target: process.env.SHOPIFY_BASE_URL!,
          changeOrigin: true,
          rewrite: (path) => path.replace("/api/store", "/api"),
        },
      },
    },
  };
});
