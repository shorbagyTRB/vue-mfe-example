import { mount as mountSvelte, unmount as unmountSvelte } from "svelte";
import Button from "./lib/Button.svelte";

let app: any = null;

const wrap = {
  mount: (el: HTMLElement) => {
    if (app) {
      unmountSvelte(app);
      app = null;
    }
    app = mountSvelte(Button, {
      target: el,
    });
  },
  unmount: () => {
    if (!app) return;
    unmountSvelte(app);
    app = null;
  },
};

export const mount = wrap.mount;
export const unmount = wrap.unmount;

export default wrap;
