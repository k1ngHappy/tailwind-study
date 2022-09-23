import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeaderListItem = ({ children }: Props) => {
  return (
    <li>
      <a
        href="#"
        className="text-xl text-red-600 font-medium hover:text-red-800 transition-colors lg:text-base"
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderListItem;
