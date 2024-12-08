import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "@/layouts/root-layout";
import AppLayout from "@/layouts/app-layout";
import LandingPage from "@/pages/landing-page";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}>
          <Route
            index
            element={<LandingPage />}
          />
          <Route
            path="/app"
            element={<AppLayout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
