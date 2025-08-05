<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: "Sample Text",
  }
);
</script>

<template>
  <p>{{ text }}</p>
</template>
