import React, { createContext, useState } from "react";

// Create a context
const ThemeContext = createContext("light");

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("orange");

  const toggleTheme = () => {
    setTheme(theme === "orange" ? "purple" : "orange");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
