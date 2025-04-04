import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  base: "/preact/",
   build: {
      target: 'esnext',
      minify: false,
    },
    server: {
      mimeTypes: {
        jsx: 'application/javascript'
      },
    },
});


