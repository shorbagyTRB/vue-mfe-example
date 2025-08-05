import { createApp, type CreateAppFunction } from "vue";
import Button from "./components/Button.vue";

let app: ReturnType<CreateAppFunction<Element>> | null = null;

const wrap = {
  mount: (el: HTMLElement) => {
    if (app) {
      app.unmount();
      app = null;
    }
    app = createApp(Button);
    app.mount(el);
  },
  unmount: () => {
    if (!app) return;
    app?.unmount();
    app = null;
  },
};

export const mount = wrap.mount;
export const unmount = wrap.unmount;

export default wrap;
