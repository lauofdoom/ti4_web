import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const ReactCompilerConfig = {
  target: "19",
};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.otf"],
  server: {
    proxy: {
      "/bot": {
        target: process.env.VITE_BOT_API_URL ?? "http://192.168.1.116:8271",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bot/, ""),
      },
      "/proxy": {
        target: process.env.VITE_MAIN_API_URL ?? "http://192.168.1.116:8271",
        changeOrigin: true,
        rewrite: (path) => {
          if (path === "/proxy/maps.json") return "/api/public/games";
          const webdataMatch = path.match(/^\/proxy\/webdata\/([^/]+)\//);
          if (webdataMatch) return `/api/public/game/${webdataMatch[1]}/webdata`;
          return path.replace(/^\/proxy/, "");
        },
      },
      "/auth": {
        target: process.env.VITE_AUTH_URL ?? "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ""),
      },
      "/images": {
        target: process.env.VITE_BOT_API_URL ?? "http://192.168.1.116:8271",
        changeOrigin: true,
      },
    },
  },
});
