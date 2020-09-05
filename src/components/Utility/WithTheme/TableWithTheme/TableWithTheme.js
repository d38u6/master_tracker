import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Table } from "react-bootstrap";

import withTheme from "../../../../HOC/withTheme";
import classes from "./TableWithTheme.module.css";

export function TableWithTheme({ className, theme, children, ...props }) {
  const themeClassName = theme.bg.charAt(0).toUpperCase() + theme.bg.slice(1);
  return (
    <Table
      {...props}
      className={classNames(classes[themeClassName], className)}
    >
      {children}
    </Table>
  );
}

TableWithTheme.propTypes = {
  className: PropTypes.string,
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]).isRequired,
    text: PropTypes.oneOf(["dark", "light"]).isRequired,
  }).isRequired,
};

export default withTheme(TableWithTheme);
