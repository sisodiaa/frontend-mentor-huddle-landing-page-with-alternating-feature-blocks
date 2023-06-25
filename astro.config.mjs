import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sisodiaa.github.io",
  repo: "/frontend-mentor-huddle-landing-page-with-alternating-feature-blocks",
  experimental: {
    assets: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
  },
});
