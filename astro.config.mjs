import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sisodiaa.github.io",
  repo: "/frontend-mentor-huddle-landing-page-with-alternating-feature-blocks",
  experimental: {
    assets: true,
  },
  build: {
    assets:
      "frontend-mentor-huddle-landing-page-with-alternating-feature-blocks/_astro",
  },
});
