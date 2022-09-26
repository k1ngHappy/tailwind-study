import React from "react";
import { useContext } from "react";
export type isActive = {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
};

export const isActiveMenuContext = React.createContext<isActive>({
  isActive: false,
  setIsActive: () => {},
});
