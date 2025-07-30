import { mount, unmount } from "svelte";
import Button from "./lib/Button.svelte";

let app: any = null;

const wrap = {
  mount: (el: HTMLElement) => {
    if (app) unmount(app);
    app = mount(Button, {
      target: el,
    });
  },
  unmount: () => {
    if (!app) return;
    unmount(app);
    app = null;
  },
};

export default wrap;
