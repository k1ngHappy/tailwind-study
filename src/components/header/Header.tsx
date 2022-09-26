import React, { useState } from "react";
import { isActiveMenuContext } from "../../data/contex/IsActiveMenuContext";
import HeaderMain from "./headerMain/HeaderMain";
import HeaderNav from "./headerNav/HeaderNav";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <isActiveMenuContext.Provider
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
    </isActiveMenuContext.Provider>
  );
};

export default Header;
