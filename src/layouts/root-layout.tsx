import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
