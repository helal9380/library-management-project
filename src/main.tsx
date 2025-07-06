/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store.ts";
import "./index.css";
import { ThemeProvider } from "./providers/ThemProvider.tsx";
import { router } from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
