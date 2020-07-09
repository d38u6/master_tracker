import React, { useContext } from "react";
import ThemeContext from "../components/Theme/ThemeContext";

function withTheme(Cmp) {
  return (props) => {
    const { theme } = useContext(ThemeContext);
    return (
      <Cmp
        {...props}
        theme={{
          bg: theme || "dark",
          text: theme === "light" ? "dark" : "light",
        }}
      />
    );
  };
}

export default withTheme;
