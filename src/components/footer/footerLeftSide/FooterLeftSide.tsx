import React from "react";
import MyBtnRedBg from "../../../UI/myBtn/MyBtnRedBg";

type Props = {};

const FooterLeftSide = (props: Props) => {
  return (
    <div className="w-[328px] mt-[81px] leading-[-3%] mr-[300px]">
      <a href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/LogoFooter.svg"}
          alt="Logo"
        />
      </a>
      <p className="text-xl text-slate-100 mt-5 mb-3">
        Sign up for our newsletter to get latest news from us
      </p>
      <form>
        <input
          type="text"
          placeholder="Enter your email"
          className="block bg-gray-600 w-[318px] h-10 border-none rounded-lg pl-4 mb-4 text-slate-50 focus:outline-none"
        />
        <MyBtnRedBg children="Submit" />
      </form>
    </div>
  );
};

export default FooterLeftSide;
