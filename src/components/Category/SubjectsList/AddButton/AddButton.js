import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

import classes from "./AddButton.module.css";

function AddButton({ onClick }) {
  return (
    <tr>
      <td colSpan="4" className={classes.Wrapper}>
        <Button
          variant="success"
          size="sm"
          className={classes.AddButton}
          onClick={onClick}
        >
          Add New <BsPlus className={classes.Icon} />
        </Button>
      </td>
    </tr>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
