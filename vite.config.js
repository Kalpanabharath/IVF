import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/IVF/", // Use your repository name here
  plugins: [react()],
});
