import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import withTheme from "HOC/withTheme";
import ToggleThemeButton from "Components/Theme/ToggleThemeButton/ToggleThemeButton";

import Navigation from "./Navigation/Navigation";

export function Header({ theme }) {
  return (
    <Navbar
      collapseOnSelect={true}
      expand="sm"
      bg={theme.bg}
      variant={theme.bg}
      className="justify-content-between"
    >
      <Navbar.Brand as={Link} to="/">
        Master Tracker
      </Navbar.Brand>
      <Navigation />
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
