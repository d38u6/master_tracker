import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Button } from "react-bootstrap";

function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const variant = theme === "dark" ? "light" : "dark";
  return (
    <Button variant={variant} onClick={() => toggleTheme()}>
      <span style={{ textTransform: "capitalize" }}>{variant}</span>
    </Button>
  );
}

export default ToggleThemeButton;
