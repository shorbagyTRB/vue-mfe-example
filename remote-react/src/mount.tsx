import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import "./index.css";
import Button from "./components/Button.tsx";

let rootElement: Root | null = null;

const wrap = {
  mount: (el: HTMLElement) => {
    if (rootElement) rootElement.unmount();
    rootElement = createRoot(el);
    rootElement.render(
      <StrictMode>
        <Button />
      </StrictMode>
    );
  },
  unmount: () => {
    if (!rootElement) return;
    rootElement?.unmount();
    rootElement = null;
  },
};

export const mount = wrap.mount;
export const unmount = wrap.unmount;

export default wrap;
