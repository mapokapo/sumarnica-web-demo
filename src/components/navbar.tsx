import Logo from "@/components/logo";
import { useUser } from "@/lib/context/user-context";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, useLocation } from "react-router";

const Navbar: React.FC = () => {
  const { user } = useUser();
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
        Naslovna
      </NavLink>
      {user !== null && (
        <>
          <NavLink
            to="/app/pametne-ucionice"
            className={cn(
              "p-4",
              pathname === "/app/pametne-ucionice"
                ? "border-b-4 border-sum-blue"
                : ""
            )}>
            Pametne učionice
          </NavLink>
          <NavLink
            to="/app/virtualna-knjiznica"
            className={cn(
              "p-4",
              pathname === "/app/virtualna-knjiznica"
                ? "border-b-4 border-sum-blue"
                : ""
            )}>
            Virtualna knjižnica
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
