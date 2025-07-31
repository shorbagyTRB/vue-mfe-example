<script setup lang="ts">
import Button from "remote/Button";
import reactButton from "remoteReact/mount";
import rsbuildButton from "reactRsbuild/mount";
import HostButton from "./components/Button.vue";
import Wrapper from "./components/Wrapper.vue";
import { useLoadRemoteModuleDynamically } from "./utils";

const { remoteModule: svelteButtonModule, isReady } =
  useLoadRemoteModuleDynamically({
    remoteName: "remoteSvelteDynamic",
    remoteEntryUrl: "http://localhost:3003/assets/remoteEntry.js",
    exposedPath: "./mount",
    format: "esm",
    from: "vite",
  });
</script>

<template>
  <div class="layout">
    <h1>Layout</h1>
    <p>
      Layout is the host application, and it has a shared store with React
      Remote application using zustand, HostButton and ReactButton use same
      store counter
    </p>
    <ErrorBoundary>
      <div class="logo-container">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        <HostButton />
      </div>
    </ErrorBoundary>
    <Wrapper :wrapper="reactButton" />
    <Wrapper v-if="!!isReady" :wrapper="svelteButtonModule" />
    <Wrapper :wrapper="rsbuildButton" />
    <ErrorBoundary>
      <Button />
    </ErrorBoundary>
  </div>
</template>

<style scoped>
.layout {
  border: 1px solid #fff;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  color: #fff;
  font-size: 16px;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
