import React, { useContext } from "react";
import { isActiveMenuContext } from "../../../data/contex/IsActiveMenuContext";
import { navData } from "../../../data/NavData";
import HeaderBurgerNav from "./headerBurgerNav/HeaderBurgerNav";
import HeaderListItem from "./headerListItem/HeaderListItem";
import s from "./headerNav.module.scss";
type Props = {};

const HeaderNav = (props: Props) => {
  const { isActive, setIsActive } = useContext(isActiveMenuContext);
  return (
    <nav className="flex justify-between pt-[26px]  lg:pt-5 relative md:border-b">
      <a href="#">
        <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="Logo" />
      </a>
      <ul className="flex gap-12 self-center md:hidden">
        {navData.map((i) => (
          <HeaderListItem children={i} key={i} />
        ))}
      </ul>
      <HeaderBurgerNav />

      <ul className={!isActive ? s.nav : `${s.nav} ${s.active}`}>
        {navData.map((i) => (
          <HeaderListItem children={i} key={i} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
