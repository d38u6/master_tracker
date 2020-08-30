import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TableWithTheme from "../TableWithTheme/TableWithTheme";
import classes from "./TableStriped.module.css";

function TableStriped({ className, children }) {
  return (
    <TableWithTheme
      className={classNames(classes.TableStriped, className)}
      striped
      hover
      size="sm"
    >
      <tbody>{children}</tbody>
    </TableWithTheme>
  );
}

TableStriped.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableStriped;
