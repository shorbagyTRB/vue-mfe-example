import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-react",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
        "./mount": "./src/mount.tsx",
        "./store": "./src/store/count.ts",
      },
      shared: ["zustand/vanilla"],
    }),
  ],
  build: {
    assetsInlineLimit: 100_000_000, // effectively inlines all assets
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: "esm",
        entryFileNames: "assets/[name].js",
        minifyInternalExports: false,
      },
    },
  },
});
