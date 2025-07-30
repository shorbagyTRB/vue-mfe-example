import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
// import federation from "@originjs/vite-plugin-federation";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "remoteSvelte",
      filename: "assets/remoteEntry.js",
      exposes: {
        "./Button": "./src/lib/Button.svelte",
        "./mount": "./src/mount.ts",
      },
    }),
  ],
});
