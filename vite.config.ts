import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

const timestamp = new Date().getTime();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  build: {
    outDir: `dist/${timestamp}`, // 输出目录设置为 dist/时间戳
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
