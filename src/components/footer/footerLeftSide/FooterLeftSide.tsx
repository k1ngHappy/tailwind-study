import React from "react";

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
      <form>
        <input
          type="text"
          placeholder="Enter your email"
          className="block bg-gray-600 w-full h-10 border-none rounded-lg pl-4 mb-4 text-slate-50 focus:outline-none lg:h-8 lg:text-xs md:h-6 sm:h-5"
        />
        <button className="w-[151px] h-[46px] text-xl text-center align-middle rounded-2xl bg-red-500 text-slate-50 border-2 border-red-500 hover:bg-transparent transition-colors lg:w-[130px] lg:h-[40px] lg:text-base md:text-sm md:w-[100px] md:h-[25px] sm:text-xs sm:w-[105px] sm:h-[20px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FooterLeftSide;
