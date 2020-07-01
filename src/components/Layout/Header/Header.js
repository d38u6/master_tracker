import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import ToggleThemeButton from "../../Theme/ToggleThemeButton";
import ThemeContext from "../../Theme/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Navbar bg={theme} variant={theme} className="justify-content-between">
      <Navbar.Brand href="/">Progres Tracker</Navbar.Brand>
      <ToggleThemeButton />
    </Navbar>
  );
};

export default Header;
