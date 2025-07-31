import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import {
  ModuleFederationPlugin,
  createModuleFederationConfig,
} from "@module-federation/enhanced/rspack";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";

const mfConfig = createModuleFederationConfig({
  name: "reactRsbuild",
  filename: "assets/remoteEntry.js",
  exposes: {
    "./mount": "./src/mount.tsx",
    "./Button": "./src/components/Button.tsx",
  },
  library: {
    type: "module",
  },
});

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill()],
  tools: {
    rspack: {
      experiments: {
        outputModule: true,
      },
      target: "es2020",
      plugins: [new ModuleFederationPlugin(mfConfig)],
    },
  },
});
