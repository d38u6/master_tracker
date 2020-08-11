import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import classes from "./RowButton.module.css";

function RowButton({ variant, onClick, children }) {
  return (
    <tr className={classes.RowButton}>
      <td colSpan="4">
        <Button
          variant={variant || "primary"}
          size="sm"
          className={classes.Button}
          onClick={onClick}
        >
          {children}
        </Button>
      </td>
    </tr>
  );
}

RowButton.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "link",
  ]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default RowButton;
