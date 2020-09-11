import React from "react";
import ThemeContext from "./ThemeContext";
import useTheme from "./useTheme";

function Theme({ children }) {
  const [theme, toggleTheme, initialized] = useTheme();

  return initialized ? (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  ) : null;
}

export default Theme;
