import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import ThemeContext from "../ThemeContext";
import classes from "./ToggleThemeButton.module.css";

function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const icon = theme === "dark" ? <FiSun /> : <FiMoon />;
  return (
    <div className={classes.ToggleThemeButton} onClick={() => toggleTheme()}>
      <span style={{ textTransform: "capitalize" }}>{icon}</span>
    </div>
  );
}

export default ToggleThemeButton;
