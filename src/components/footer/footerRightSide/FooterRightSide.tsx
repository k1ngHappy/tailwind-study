import React from "react";

type Props = {};

const FooterRightSide = (props: Props) => {
  return (
    <nav className="mt-[81px] ">
      <ul className="flex flex-col gap-3 self-center md:hidden">
        <li className="text-red-500 font-medium text-lg">Jump to</li>
        <a
          href="#"
          className="text-lg text-slate-50 hover:text-red-500 transition-colors "
        >
          <li>About</li>
        </a>
        <a
          href="#"
          className="text-lg text-slate-50 hover:text-red-500 transition-colors "
        >
          <li>Contact</li>
        </a>
        <a
          href="#"
          className="text-lg text-slate-50 hover:text-red-500 transition-colors "
        >
          <li>Services</li>
        </a>
        <a
          href="#"
          className="text-lg text-slate-50 hover:text-red-500 transition-colors "
        >
          <li>Case Studies</li>
        </a>
        <a
          href="#"
          className="text-lg text-slate-50 hover:text-red-500 transition-colors "
        >
          <li>Blog</li>
        </a>
      </ul>
    </nav>
  );
};

export default FooterRightSide;
