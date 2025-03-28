import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  base: "/preact/",
   build: {
      target: 'esnext',  // 确保使用 ESNext 的构建方式
      minify: false,
    },
    server: {
      mimeTypes: {
        jsx: 'application/javascript' // 确保 JSX 被识别为 JavaScript
      },
    },
});


