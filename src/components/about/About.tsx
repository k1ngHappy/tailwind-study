import React from "react";
import MyBtnRedBg from "../../UI/myBtn/MyBtnRedBg";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      className="container flex justify-between mt-[146px] flex-wrap sm:justify-center md:mt-[100px] dark:text-slate-50"
      id="About "
    >
      <div className="w-[50%] sm:w-[70%]">
        <p className="text-xl text-red-500 font-bold mb-0.5 lg:text-lg md:text-sm sm:text-xs ">
          about us
        </p>
        <h2 className="font-bold text-4xl lg:text-3xl md:text-2xl sm:text-xl ">
          The team behind the brand.
        </h2>
        <p className="w-[85%] text-lg leading-normal mt-[10px] mb-[21px] lg:text-base md:text-sm sm:text-xs">
          Proin elementum fermentum auctor. Nulla semper, est eget congue
          pellentesque, erat nulla molestie mi, in finibus leo nisl ac lectus.
          Praesent non urna. Nulla congue porta lectus in laoreet. Aenean
          pellentesque vitae metus id porttitor.t
        </p>
        <div className="pl-[17%] sm:w-[70%] ">
          <MyBtnRedBg children="Learn More" />
        </div>
      </div>
      <div className="w-[50%]  sm:hidden">
        <img
          src={process.env.PUBLIC_URL + "/images/About.png"}
          alt="Image"
          className="max-w-[445px] max-h-[318px]  w-[90%] bg-cover bg-no-repeat bg-center"
        />
      </div>
    </div>
  );
};

export default About;
