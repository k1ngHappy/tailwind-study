import React from "react";

type Props = {
  children: React.ReactNode;
};

const MyBtnRedBg = (p: Props) => {
  return (
    <button className="w-[151px] h-[46px] text-xl rounded-2xl bg-red-500 text-slate-50 border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-colors">
      {p.children}
    </button>
  );
};

export default MyBtnRedBg;
