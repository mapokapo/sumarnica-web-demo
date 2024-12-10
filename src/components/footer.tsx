import Logo from "@/components/logo";
import React from "react";
import { NavLink } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-4 bg-sum-blue p-4 text-sum-blue-foreground">
      <div className="flex w-full flex-col justify-between divide-y-2 divide-sum-blue-foreground/50 md:max-w-screen-lg md:flex-row md:divide-x-2 md:divide-y-0">
        <div className="flex flex-1 flex-col gap-8 p-4">
          <Logo className="mx-auto" />
          <address className="flex flex-col items-center gap-2 not-italic md:items-start">
            <p>Trg hrvatskih velikana 1, 88000, Mostar, BiH</p>
            <p>
              Tehnička podrška:{" "}
              <a
                href="mailto:sumarnica@sum.ba"
                target="_blank"
                className="underline">
                sumarnica@sum.ba
              </a>
            </p>
          </address>
        </div>
        <div className="flex flex-1 flex-col gap-8 p-4">
          <strong className="text-center">O NAMA</strong>
          <ul className="flex flex-col items-center px-4 text-sum-blue-muted-foreground md:items-start">
            <li>
              <NavLink to="/o-nama/sumarnica">SUMarnica</NavLink>
            </li>
            <li>
              <a
                href="https://sum.ba"
                target="_blank">
                SUM
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-8 p-4">
          <strong className="text-center">SURADNJA</strong>
          <ul className="flex flex-col items-center px-4 text-sum-blue-muted-foreground md:items-start">
            <li>
              <NavLink to="/suradnja/udruge">Udruge</NavLink>
            </li>
            <li>
              <NavLink to="/suradnja/tvrtke">Tvrtke</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-lg text-sum-blue-muted-foreground">
        Copyright &copy; <strong>SUMarnica</strong> 2024
      </p>
    </footer>
  );
};

export default Footer;
