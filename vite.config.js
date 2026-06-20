import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base ('./') makes built asset URLs work at any path, including
// a GitHub Pages project subpath (https://alextecson.github.io/<repo>/).
// There is no client-side router, so relative paths are safe.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    // Build into docs/ so GitHub Pages can serve from `main` branch `/docs`.
    outDir: "docs",
    emptyOutDir: true,
    // The app embeds ~1.5MB of base64 images in a single module; raise the
    // warning ceiling so the build log stays clean.
    chunkSizeWarningLimit: 2000,
  },
});
