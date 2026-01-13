import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Compat: this project uses HashRouter.
// If someone lands on a non-hash URL (e.g. /brand-export), redirect to /#/brand-export.
const { pathname, hash, search } = window.location;
const looksLikeFile = /\.[a-zA-Z0-9]+$/.test(pathname);
if ((!hash || hash === "#" || hash === "#/") && pathname !== "/" && !looksLikeFile) {
  window.location.replace(`${window.location.origin}/#${pathname}${search}`);
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

