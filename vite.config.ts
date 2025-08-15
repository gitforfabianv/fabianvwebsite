import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/fabianvwebsite/", // GitHub repo
  plugins: [tailwindcss()],
});
