import React from "react";
import HeaderHero from "./headerHero/HeaderHero";
import HeaderNav from "./headerNav/HeaderNav";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <HeaderNav />
          <HeaderHero />
        </div>
      </header>
    </>
  );
};

export default Header;
