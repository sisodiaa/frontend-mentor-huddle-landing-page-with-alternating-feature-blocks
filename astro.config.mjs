import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sisodiaa.github.io",
  repo: "/frontend-mentor-huddle-landing-page-with-alternating-feature-blocks",
  experimental: {
    assets: true,
  },
  build: {
    assetsPrefix:
      "https://sisodiaa.github.io/frontend-mentor-huddle-landing-page-with-alternating-feature-blocks",
  },
});
