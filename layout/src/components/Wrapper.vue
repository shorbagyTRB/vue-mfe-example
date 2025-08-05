<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import ErrorBoundary from "./ErrorBoundary.vue";

const props = defineProps<{
  wrapper: { mount: (el: HTMLElement) => void; unmount: () => void };
}>();

const containerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (containerRef.value) {
    props.wrapper.mount(containerRef.value);
  }
});

onUnmounted(() => {
  props.wrapper.unmount();
});
</script>

<template>
  <ErrorBoundary>
    <div ref="containerRef"></div>
  </ErrorBoundary>
</template>
