import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeaderListItem = ({ children }: Props) => {
  return (
    <li>
      <a
        href="#"
        className="text-xl text-rose-500 font-medium hover:text-red-700  transition-color lg:text-base"
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderListItem;
