<script setup lang="ts">
import { useCountStore } from "../store/zustandCount";

const count = useCountStore((state) => state.count);
const increaseCount = useCountStore((state) => state.increaseCount);

const add = () => increaseCount();
</script>

<template>
  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
