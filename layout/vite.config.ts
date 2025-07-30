import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import federation from "@originjs/vite-plugin-federation";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "layout",
      filename: "remoteEntry.js",
      // remotes: {
      //   remote: {
      //     entry: "http://localhost:3001/assets/remoteEntry.js",
      //     name: "remote",
      //     type: "module",
      //   },
      //   remoteReact: {
      //     entry: "http://localhost:3002/assets/remoteEntry.js",
      //     name: "remoteReact",
      //     type: "module",
      //   },
      //   remoteSvelte: {
      //     entry: "http://localhost:3003/assets/remoteEntry.js",
      //     name: "remoteSvelte",
      //     type: "module",
      //   },
      // },
      shared: ["vue", "zustand"],
    }),
  ],
});
