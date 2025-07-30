<script setup lang="ts">
import create from "vue-zustand";
import { useModuleFederation } from "../plugins/mf";
import { computed, onMounted, ref, watch } from "vue";

const remoteStoreModule = useModuleFederation("store");
const remoteModuleRef = ref<any>(null);

const useCountStore = computed(() => {
  return remoteModuleRef.value ? create(remoteModuleRef.value) : null;
});

const count = computed(() =>
  useCountStore?.value?.((state: any) => state.count)
);
const increaseCount = computed(() =>
  useCountStore?.value?.((state: any) => state.increaseCount)
);

const loadRemote = async (): Promise<void> => {
  try {
    // Load the remote module dynamically via Vite Module Federation
    const remoteModule: { module: { default: any } } | null =
      (await remoteStoreModule.loadRemote("remoteReact")) as any;

    if (!remoteModule) return;

    remoteModuleRef.value = remoteModule?.module?.default;
  } catch (error) {
    console.error("Error loading remote module:", error);
  }
};

const add = () => increaseCount?.value?.();

watch(useCountStore, (newVal) => {
  console.log({ newVal });
});

onMounted(() => {
  loadRemote();
});
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
