import { createPinia } from "pinia";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { useRouteRegistry } from "./router";
import { getRemotes } from "./routeManifest";
import moduleFederationPlugin from "./plugins/mf";

const pinia = createPinia();
const routeRegistry = useRouteRegistry();

createApp(App)
  .use(moduleFederationPlugin, getRemotes())
  .use(pinia)
  .use(routeRegistry)
  .mount("#app");
