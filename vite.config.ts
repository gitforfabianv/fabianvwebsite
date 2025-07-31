import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/fabianvwebsite/", // 👈 set this to match your GitHub repo
  plugins: [tailwindcss()],
});

