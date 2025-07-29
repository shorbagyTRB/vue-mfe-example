<script setup lang="ts">
import Button from "remote/Button";
import mount from "remoteReact/mount";
import HostButton from "./components/Button.vue";
import { onMounted, onUnmounted, ref } from "vue";

const reactButton = ref<HTMLElement | null>(null);

onMounted(() => {
  if (reactButton.value) {
    mount(reactButton.value);
  }
});

onUnmounted(() => {
  if (reactButton.value) {
    reactButton.value = null;
  }
});
</script>

<template>
  <div class="layout">
    <h1>Layout</h1>
    <HostButton />
    <Button />
    <div ref="reactButton"></div>
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
