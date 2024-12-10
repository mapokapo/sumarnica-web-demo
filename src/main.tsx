import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "@/layouts/root-layout";
import AppLayout from "@/layouts/app-layout";
import LandingPage from "@/pages/landing-page";
import SmartClassroomsPage from "@/pages/app/smart-classrooms-page";
import VirtualLibraryPage from "@/pages/app/virtual-library-page";
import UserProvider from "@/components/providers/user-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const queryClient = new QueryClient();

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
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
                element={<AppLayout />}>
                <Route
                  path="/app/pametne-ucionice"
                  element={<SmartClassroomsPage />}
                />
                <Route
                  path="/app/virtualna-knjiznica"
                  element={<VirtualLibraryPage />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
