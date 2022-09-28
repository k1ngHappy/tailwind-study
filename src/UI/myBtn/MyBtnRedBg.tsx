import React from "react";

type Props = {
  children: React.ReactNode;
};

const MyBtnRedBg = (p: Props) => {
  return (
    <button
      className="w-[151px] h-[46px] text-xl rounded-2xl bg-red-500 text-slate-50 border-[2.5px] border-red-500 hover:bg-transparent hover:text-red-500 transition-colors lg:w-[120px] lg:h-[40px]
    lg:text-base md:w-[90px] md:h-[34px] md:text-sm  sm:block   sm:h-[28px] sm:text-xs dark:hover:text-red-500 dark:hover:bg-slate-50
    "
    >
      {p.children}
    </button>
  );
};

export default MyBtnRedBg;
