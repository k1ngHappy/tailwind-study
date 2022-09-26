import React from "react";
import FooterLeftSide from "./footerLeftSide/FooterLeftSide";
import FooterRightSide from "./footerRightSide/FooterRightSide";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-[425px] lg:h-[350px] md:h-[300px] sm:h-[280px] bg-gray-800 flex-wrap">
      <div className="container mt-[90px] flex justify-between w-[70%] lg:mt-[80px] md:mt-[70px] md:w-[70%] sm:mt-[60px]">
        <FooterLeftSide />
        <FooterRightSide />
      </div>
    </footer>
  );
};

export default Footer;
