import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext('light');

export const ThemeProvider = ({children}) =>{

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() =>{
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
  </ThemeContext.Provider>
  );
}

export const useDarkMode = () => useContext(ThemeContext);
