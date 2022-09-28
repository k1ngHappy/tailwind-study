import React, { useState } from "react";
import { isActiveMenu } from "../../hooks/navIsActiveContext";
import HeaderMain from "./headerMain/HeaderMain";
import HeaderNav from "./headerNav/HeaderNav";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <isActiveMenu.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      <header className="w-[95%]">
        <div className="container">
          <HeaderNav />
          <HeaderMain />
        </div>
      </header>
    </isActiveMenu.Provider>
  );
};

export default Header;
