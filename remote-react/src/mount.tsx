import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/Button.tsx";

export default function mount(el: HTMLElement) {
  createRoot(el).render(
    <StrictMode>
      <Button />
    </StrictMode>
  );
}
