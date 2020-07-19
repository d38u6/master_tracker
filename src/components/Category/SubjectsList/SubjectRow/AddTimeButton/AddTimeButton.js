import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

import classes from "./AddTimeButton.module.css";

function AddTimeButton({ onClick }) {
  return (
    <td>
      <Button
        variant="success"
        size="sm"
        className={classes.AddTimeButton}
        onClick={onClick}
      >
        Add Time <BsPlus className={classes.Icon} />
      </Button>
    </td>
  );
}

AddTimeButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddTimeButton;
