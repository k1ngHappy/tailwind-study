import React from "react";
import FooterLeftSide from "./footerLeftSide/FooterLeftSide";
import FooterRightSide from "./footerRightSide/FooterRightSide";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-[425px] bg-gray-800">
      <div className="container mt-[90px] flex ">
        <FooterLeftSide />
        <FooterRightSide />
      </div>
    </footer>
  );
};

export default Footer;
