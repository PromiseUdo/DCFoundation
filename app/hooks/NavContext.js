"use client";

import React, { createContext, useContext, useState } from "react";

const NavItemContext = createContext();

export const NavItemProvider = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("All");

  const updateNavItem = (newState) => {
    setSelectedNavItem(newState);
  };

  return (
    <NavItemContext.Provider value={{ selectedNavItem, updateNavItem }}>
      {children}
    </NavItemContext.Provider>
  );
};

export const useNavItem = () => {
  const context = useContext(NavItemContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};
