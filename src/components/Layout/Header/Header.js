import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "react-bootstrap";
import ToggleThemeButton from "../../Theme/ToggleThemeButton";
import withTheme from "../../../HOC/withTheme";

const Header = ({ theme }) => {
  return (
    <Navbar
      bg={theme.bg}
      variant={theme.bg}
      className="justify-content-between"
    >
      <Navbar.Brand href="/">Progres Tracker</Navbar.Brand>
      <ToggleThemeButton />
    </Navbar>
  );
};

Header.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.oneOf(["dark", "light"]),
  }),
};

export default withTheme(Header);
