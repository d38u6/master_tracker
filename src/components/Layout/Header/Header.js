import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "react-bootstrap";
import ToggleThemeButton from "../../Theme/ToggleThemeButton";
import withTheme from "../../../HOC/withTheme";

export function Header({ theme }) {
  return (
    <Navbar
      bg={theme.bg}
      variant={theme.bg}
      className="justify-content-between"
    >
      <Navbar.Brand href="/">Master Tracker</Navbar.Brand>
      <ToggleThemeButton />
    </Navbar>
  );
}

Header.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.oneOf(["dark", "light"]),
  }).isRequired,
};

export default withTheme(Header);
