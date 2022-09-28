import React from "react";

type Props = {
  children: React.ReactNode;
};

const MyBtnWhiteBg = (p: Props) => {
  return (
    <button
      className="w-[151px] h-[46px] text-xl rounded-2xl bg-transparent text-red-500 border-[2.5px]  border-red-500 hover:bg-red-500  hover:text-slate-50 transition-colors lg:w-[120px] lg:h-[40px]
      lg:text-base md:w-[90px] md:h-[34px] md:text-sm   sm:block sm:h-[28px] sm:text-xs dark:bg-slate-100 dark:hover:text-slate-50 dark:hover:bg-red-500 "
    >
      {p.children}
    </button>
  );
};

export default MyBtnWhiteBg;
