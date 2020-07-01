import { useState, useEffect } from "react";
import { defaultTheme } from "./ThemeContext";

const THEME = "theme";

export default () => {
  const [theme, setTheme] = useState(defaultTheme);
  const [initialized, setInitialized] = useState(false);

  const _setTheme = (theme) => {
    document.body.className = theme;
    setTheme(theme);
  };

  const setMode = (mode) => {
    window.localStorage.setItem(THEME, mode);
    _setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME);
    if (localTheme) {
      _setTheme(localTheme);
    } else {
      setMode(defaultTheme);
    }
    setInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [theme, toggleTheme, initialized];
};
