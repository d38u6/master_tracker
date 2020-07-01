import React, { useContext } from "react";
import ThemeContext from "../components/Theme/ThemeContext";

const withTheme = (Cmp) => {
  return (props) => {
    const { theme } = useContext(ThemeContext);
    return (
      <Cmp
        {...props}
        theme={{ bg: theme, text: theme === "dark" ? "light" : "dark" }}
      />
    );
  };
};

export default withTheme;
