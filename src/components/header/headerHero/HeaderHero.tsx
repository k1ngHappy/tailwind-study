import React from "react";
import MyBtnRedBg from "../../../UI/myBtn/MyBtnRedBg";
import MyBtnWhiteBg from "../../../UI/myBtn/MyBtnWhiteBg";

type Props = {};

const HeaderHero = (props: Props) => {
  return (
    <div className="w-[609px] mx-auto  mt-[109px] text-center  ">
      <h1 className=" text-[50px] font-bold leading-tight">
        Grow your business online. Get. More. Leads.
      </h1>
      <p className="text-xl text-center px-[30px] mt-[18px]">
        Wanna get serious into digital marketing? Then you need leads and this
        is where we can help you.
      </p>
      <div className="flex w-[325px] justify-center mx-auto gap-7 mt-[31px]">
        <a href="#">
          <MyBtnRedBg children="Start here" />
        </a>
        <a href="#">
          <MyBtnWhiteBg children="Learn more" />
        </a>
      </div>
    </div>
  );
};

export default HeaderHero;
