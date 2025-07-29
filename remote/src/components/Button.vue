<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const add = () => count.value++;
</script>

<template>
  <h1>Remote</h1>

  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>

<style scoped></style>
