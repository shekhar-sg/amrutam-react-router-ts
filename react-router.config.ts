import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  prerender: ["/"],
  future: {
    unstable_optimizeDeps: true,
    unstable_middleware: true,
    // unstable_splitRouteModules: true,
  },
} satisfies Config;
