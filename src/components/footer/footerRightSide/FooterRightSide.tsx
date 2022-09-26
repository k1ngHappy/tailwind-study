import React from "react";
import { navData } from "../../../data/NavData";

const FooterRightSide = () => {
  return (
    <nav className="mt-[81px] lg:mt-[71px] md:mt-[61px] sm:mt-[50px] w-[50%] sm:hidden">
      <ul className="flex flex-col gap-3 ml-[30%] text-left md:justify-between md:text-right">
        <li className="text-red-500 font-medium">Jump to</li>
        {navData.map((i) => (
          <a
            key={i}
            href="#"
            className="text-lg text-slate-50 hover:text-red-500 transition-colors lg:text-base"
          >
            <li>{i}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default FooterRightSide;
