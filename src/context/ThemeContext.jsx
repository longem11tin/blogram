"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getThemeLocalStorage = () => {

  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  };
  return "dark";
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getThemeLocalStorage(); 
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme , toggle}}> 
      {children} 
    </ThemeContext.Provider>
  )
}