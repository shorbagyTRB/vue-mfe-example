import { useStore } from "zustand";
import type { CountState } from "./count";
import countStore from "./count";

export const useCountStore = <T>(selector: (state: CountState) => T): T =>
  useStore(countStore, selector);
