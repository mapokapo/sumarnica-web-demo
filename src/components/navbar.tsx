import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, useLocation } from "react-router";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex w-full items-center">
      <NavLink
        to="/"
        className="p-4">
        <Logo size="icon" />
      </NavLink>
      <NavLink
        to="/"
        className={cn(
          "p-4",
          pathname === "/" ? "border-b-4 border-sum-blue" : ""
        )}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
