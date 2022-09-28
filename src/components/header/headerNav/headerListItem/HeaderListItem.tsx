import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeaderListItem = ({ children }: Props) => {
  return (
    <li>
      <a
        href="#"
        className="text-xl text-rose-500 font-medium hover:text-black  transition-color lg:text-base dark:text-slate-50 dark:hover:text-red-600"
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderListItem;
