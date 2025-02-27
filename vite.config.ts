import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgR from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), svgR(), tsconfigPaths()],
  server: {
    proxy: {
      "/api/store": {
        target:
          process.env.SHOPIFY_BASE_URL!,
        changeOrigin: true,
        rewrite: (path) => path.replace("/api/store", "/api"),
      },

    },
  },
});
