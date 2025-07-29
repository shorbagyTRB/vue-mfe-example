<script setup lang="ts">
import { countStore } from "../store/count";

const store = countStore();

const add = () => store.count++;
</script>

<template>
  <h1>Host Button</h1>

  <div class="card">
    <button type="button" @click="add">count is {{ store.count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
