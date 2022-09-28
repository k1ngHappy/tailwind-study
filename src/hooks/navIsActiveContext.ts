import React from "react";
export type isActive = {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
};

export const isActiveMenu = React.createContext<isActive>({
  isActive: false,
  setIsActive: () => {},
});
