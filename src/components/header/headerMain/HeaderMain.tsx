import React, { useContext } from "react";
import { isActiveMenuContext } from "../../../data/contex/IsActiveMenuContext";
import MyBtnRedBg from "../../../UI/myBtn/MyBtnRedBg";
import MyBtnWhiteBg from "../../../UI/myBtn/MyBtnWhiteBg";

type Props = {};

const HeaderHero = (props: Props) => {
  const { isActive } = useContext(isActiveMenuContext);
  return (
    <div
      className={`w-[75%] mx-auto  mt-[109px] text-center  ${
        isActive ? "mt-[300px]" : ""
      }`}
    >
      <h1 className=" with-[65%] text-[50px] font-bold leading-tight lg:text-3xl md:text-2xl sm:text-xl">
        Grow your business online. Get. More. Leads.
      </h1>
      <p className="text-xl text-center px-[30px] mt-[18px] lg:text-lg md:text-sm sm:text-xs">
        Wanna get serious into digital marketing? Then you need leads and this
        is where we can help you.
      </p>
      <div className="flex w-[80%] justify-center mx-auto gap-7 mt-[31px] ">
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
