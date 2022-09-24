import React from "react";
import { navItems } from "../NavData";
import HeaderListItem from "./headerListItem/HeaderListItem";

type Props = {};

const HeaderNav = (props: Props) => {
  return (
    <nav className="flex justify-between pt-[26px]  lg:pt-5 ">
      <a href="#">
        <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="Logo" />
      </a>
      <ul className="flex gap-12 self-center md:hidden">
        {navItems.map((i) => (
          <HeaderListItem children={i} key={i} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
