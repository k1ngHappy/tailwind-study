import React from "react";
import MyBtnRedBg from "../../UI/myBtn/MyBtnRedBg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="container flex justify-between mt-[146px]">
      <div className="w-full">
        <h2 className="font-bold text-4xl ">The team behind the brand.</h2>
        <p className="w-[386px] text-lg leading-normal mt-[10px] mb-[21px]">
          Proin elementum fermentum auctor. Nulla semper, est eget congue
          pellentesque, erat nulla molestie mi, in finibus leo nisl ac lectus.
          Praesent non urna. Nulla congue porta lectus in laoreet. Aenean
          pellentesque vitae metus id porttitor.t
        </p>
        <MyBtnRedBg children="Learn More" />
      </div>
      <div className="w-full">
        <img
          src={process.env.PUBLIC_URL + "/images/About.png"}
          alt="Image"
          className="w-[445px] h-[318px]"
        />
      </div>
    </div>
  );
};

export default About;
