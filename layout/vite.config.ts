import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import Sonda from "sonda/vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    vue(),
    federation({
      name: "layout",
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js",
        remoteReact: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["vue", "zustand"],
    }),
    Sonda({
      open: process.env.DEPLOYMENT_TARGET !== "production",
    }),
  ],
});
