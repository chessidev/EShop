import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { ShoppingCartProvider } from "./components/Shared/ShoppingCartContext.js";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </StrictMode>
);
