import React, { useContext } from "react";
import { isActiveMenu } from "../../../hooks/navIsActiveContext";
import { navList } from "./NavList";
import HeaderBurgerNav from "./headerBurgerNav/HeaderBurgerNav";
import HeaderListItem from "./headerListItem/HeaderListItem";
import Logo from "./Logo";
import s from "./headerNav.module.scss";

type Props = {};

const HeaderNav = (props: Props) => {
  const { isActive } = useContext(isActiveMenu);
  return (
    <nav className="flex justify-between pt-[26px]  lg:pt-5 relative md:border-b">
      <a href="#">
        <Logo />
      </a>
      <ul className="flex gap-12 self-center md:hidden">
        {navList.map((i) => (
          <HeaderListItem children={i} key={i} />
        ))}
      </ul>
      <HeaderBurgerNav />

      <ul className={!isActive ? s.nav : `${s.nav} ${s.active}`}>
        {navList.map((i) => (
          <HeaderListItem children={i} key={i} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
