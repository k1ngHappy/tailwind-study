import React from "react";
import FooterForm from "./footerForm/footerForm";

type Props = {};

const FooterLeftSide = (props: Props) => {
  return (
    <div className="w-[45%] mt-[81px] lg:mt-[71px] md:mt-[61px] sm:mt-[50px] sm:w-full">
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/LogoFooter.svg"}
          alt="Logo"
        />
      </a>
      <p className="text-xl text-slate-100 mt-5 mb-3 lg:text-lg md:text-base sm:text-sm">
        Sign up for our newsletter to get latest news from us
      </p>
      <FooterForm />
    </div>
  );
};

export default FooterLeftSide;
