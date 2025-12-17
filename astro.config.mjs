// @ts-check
import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    icon({
      include: {
        simple_icons: ["*"],
        mdi: ["*"],
        akar_icons: ["discord-fill"]
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
