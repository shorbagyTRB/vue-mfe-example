import create from "vue-zustand";
import countStore from "remoteReact/store";

export const useCountStore = create(countStore);
