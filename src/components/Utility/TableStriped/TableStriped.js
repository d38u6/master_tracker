import React from "react";
import PropTypes from "prop-types";

import TableWithTheme from "../TableWithTheme/TableWithTheme";
import classes from "./TableStriped.module.css";

function TableStriped({ className, children }) {
  return (
    <TableWithTheme
      className={[classes.TableStriped, className || ""].join(" ")}
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
