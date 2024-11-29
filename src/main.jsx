import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SuccessProvider } from "./context/Successcontext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SuccessProvider>
      <App />
    </SuccessProvider>
  </StrictMode>
);