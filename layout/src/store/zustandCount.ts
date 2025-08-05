import create from "vue-zustand";
import countStore from "remoteReact/store";

interface CountState {
  count: number;
  increaseCount: () => void;
}

export const useCountStore = create<CountState>(countStore);
