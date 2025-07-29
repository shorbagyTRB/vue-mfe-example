<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const add = () => count.value++;
</script>

<template>
  <div class="card-vue">
    <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.card-vue {
  margin: 10px;
  padding: 2em;
  border: 1px solid #4fc08d;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
