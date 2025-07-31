<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import ErrorBoundary from "./ErrorBoundary.vue";

const props = defineProps<{
  wrapper: { mount: (el: HTMLElement) => void; unmount: () => void };
}>();

const reactWrapper = ref<HTMLElement | null>(null);

onMounted(() => {
  if (reactWrapper.value) {
    props.wrapper.mount(reactWrapper.value);
  }
});

onUnmounted(() => {
  props.wrapper.unmount();
});
</script>

<template>
  <ErrorBoundary>
    <div ref="reactWrapper"></div>
  </ErrorBoundary>
</template>
