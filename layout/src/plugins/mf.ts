import {
  createInstance,
  type ModuleFederation,
} from "@module-federation/enhanced/runtime";

let instance: ModuleFederation | null = null;

export const moduleFederationPlugin = {
  install: (_: any, remotes: any) => {
    const mfRemotes = remotes.map((remote: any) => ({
      name: remote.module,
      entry: remote.entry,
      type: "module",
    }));

    instance = createInstance({
      name: "layout",
      remotes: mfRemotes,
    });
  },
};

export default moduleFederationPlugin;

export const useModuleFederation = (subModuleName: string = "mount") => {
  const loadRemote = async (module: any) => {
    if (!instance) return null;

    const loadedModule: {
      mount: (container: HTMLElement) => void;
      unmount: () => void;
    } | null = await instance.loadRemote(`${module}/${subModuleName}`);

    console.log("loadedModule", loadedModule);

    if (!loadedModule) return null;

    return {
      name: module,
      module: loadedModule,
      mount: loadedModule.mount,
      unmount: loadedModule.unmount,
    };
  };

  return { loadRemote };
};
