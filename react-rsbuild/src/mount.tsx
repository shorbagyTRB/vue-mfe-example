import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import App from "./App.tsx";

let rootElement: Root | null = null;

const wrap = {
  mount: (el: HTMLElement) => {
    if (rootElement) rootElement.unmount();
    rootElement = createRoot(el);
    rootElement.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  },
  unmount: () => {
    if (!rootElement) return;
    rootElement?.unmount();
    rootElement = null;
  },
};

export default wrap;
