import React, { useContext } from "react";
import ThemeContext from "Components/Theme/ThemeContext";

function withTheme(Cmp) {
  const WithTheme = (props) => {
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
  WithTheme.displayName = `WithTheme(${
    Cmp.displayName || Cmp.name || "Component"
  })`;

  return WithTheme;
}

export default withTheme;
