<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";

const hasError = ref(false);

const props = defineProps<{
  fallback?: () => unknown;
}>();

const slots = defineSlots<{
  default: () => unknown;
}>();

if (!slots.default) {
  // eslint-disable-next-line no-console
  console.error("ErrorBoundary component must have child components.");
}

onErrorCaptured((error: Error, instance, info: string) => {
  hasError.value = true;
});
</script>

<template>
  <slot v-if="!hasError" />
  <component v-else-if="!!props.fallback && hasError" :is="props.fallback" />
  <div v-else class="mt-8">
    <p>Something went wrong</p>
  </div>
</template>
