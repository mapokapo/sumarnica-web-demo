import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { useUser } from "@/lib/context/user-context";
import { Code } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  const { user, setUser } = useUser();
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDevMode(prev => !prev);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    if (!import.meta.env.DEV) {
      return;
    }

    if (isDevMode) {
      if (user === null) {
        setUser({
          id: "test",
          name: "Test User",
          email: "test@test.com",
        });
      }
    } else {
      if (user !== null && user.id === "test") {
        setUser(null);
      }
    }
  }, [isDevMode, user, setUser]);

  return (
    <div className="min-h-screen">
      {isDevMode && (
        <div className="fixed right-0 top-0 flex items-center gap-2 bg-sum-red p-2 text-sum-red-foreground">
          <Code size={24} />
          <span className="font-mono text-lg font-bold">Dev mode active</span>
        </div>
      )}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
