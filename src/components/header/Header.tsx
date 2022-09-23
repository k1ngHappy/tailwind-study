import React from "react";
import HeaderListItem from "./headerListItem/HeaderListItem";

const Header = () => {
  const navItems: string[] = [
    "About",
    "Services",
    "Case Studies",
    "Careers",
    "Blog",
  ];
  return (
    <>
      <header>
        <div className="container">
          <nav className="flex justify-between pt-[26px] lg:pt-5">
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "/images/Logo.svg"}
                alt="Logo"
              />
            </a>
            <ul className="flex gap-12 self-center md:hidden">
              {navItems.map((i) => (
                <HeaderListItem children={i} key={i} />
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
