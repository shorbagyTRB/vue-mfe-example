import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "remote-svelte",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/lib/Button.svelte",
        "./mount": "./src/mount.ts",
      },
    }),
  ],
});
