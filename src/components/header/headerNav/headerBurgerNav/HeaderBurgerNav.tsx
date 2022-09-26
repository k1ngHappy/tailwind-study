import React, { useContext, useState } from "react";
import { isActiveMenuContext } from "../../../../data/contex/IsActiveMenuContext";
import s from "./style.module.scss";

const HeaderBurgerNav = () => {
  const { isActive, setIsActive } = useContext(isActiveMenuContext);
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={!isActive ? s.burger : `${s.burger} ${s.active}`}
      onClick={clickHandler}
    >
      <span className={s.line1}></span>
      <span className={s.line2}></span>
      <span className={s.line3}></span>
    </div>
  );
};

export default HeaderBurgerNav;
