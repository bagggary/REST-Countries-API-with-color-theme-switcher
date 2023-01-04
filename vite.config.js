import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/REST-Countries-API-with-color-theme-switcher/",
  plugins: [react()],
});
