import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      duration={2000}
      richColors
      closeButton
      theme="light"
    />
    <App />
  </React.StrictMode>,
);
