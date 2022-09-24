import React from "react";

type Props = {
  children: React.ReactNode;
};

const MyBtnWhiteBg = (p: Props) => {
  return (
    <button className="w-[151px] h-[46px] text-xl rounded-2xl bg-transparent text-red-500 border-2  border-red-500 hover:bg-red-500  hover:text-slate-50 transition-colors">
      {p.children}
    </button>
  );
};

export default MyBtnWhiteBg;
