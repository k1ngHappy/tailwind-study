import React, { useContext, useState } from "react";
import { isActiveMenu } from "../../../../hooks/navIsActiveContext";
import s from "./style.module.scss";

const HeaderBurgerNav = () => {
  const { isActive, setIsActive } = useContext(isActiveMenu);
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={!isActive ? s.burger : `${s.burger} ${s.active} `}
      onClick={clickHandler}
    >
      <span className={`${s.line1} dark:bg-slate-50`}></span>
      <span className={`${s.line2} dark:bg-slate-50`}></span>
      <span className={`${s.line3} dark:bg-slate-50`}></span>
    </div>
  );
};

export default HeaderBurgerNav;
