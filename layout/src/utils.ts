import {
  __federation_method_getRemote as getRemote,
  __federation_method_setRemote as setRemote,
  __federation_method_unwrapDefault as unwrapDefault,
} from "virtual:__federation__";
import { computed, onMounted, ref } from "vue";

type UseLoadRemoteModuleDynamicallyProps = {
  remoteName: string;
  remoteEntryUrl: string;
  exposedPath: string;
  format: "esm" | "systemjs" | "var";
  from: "vite" | "webpack";
};

export const useLoadRemoteModuleDynamically = ({
  remoteName,
  remoteEntryUrl,
  exposedPath,
  format,
  from,
}: UseLoadRemoteModuleDynamicallyProps) => {
  const remoteModule = ref<any | null>(null);
  const isLoading = ref(false);
  const error = ref<any | null>(null);
  const isReady = computed(
    () => !isLoading.value && !error.value && !!remoteModule.value
  );

  const loadRemoteModule = async () => {
    isLoading.value = true;
    error.value = null;
    remoteModule.value = null;

    try {
      const unwrapedDefaultModule = await getRemote(remoteName, exposedPath);
      const module = await unwrapDefault(unwrapedDefaultModule);
      remoteModule.value = module;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    setRemote(remoteName, {
      url: () => Promise.resolve(remoteEntryUrl),
      format,
      from,
    });

    loadRemoteModule();
  });

  return {
    remoteModule,
    isReady,
    isLoading,
    error,
  };
};
