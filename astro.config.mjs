import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  fonts: [{
    provider: fontProviders.google(),
    name: "Roboto",
    cssVariable: "--font-roboto"
  }],

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});