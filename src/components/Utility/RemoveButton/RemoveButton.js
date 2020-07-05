import React from "react";
import PropTypes from "prop-types";
import classes from "./RemoveButton.module.css";
import { FaTrash } from "react-icons/fa";

function RemoveButton({ onClick }) {
  return (
    <div className={classes.RemoveButton} onClick={onClick}>
      Remove <FaTrash />
    </div>
  );
}

RemoveButton.propTypes = {
  onClick: PropTypes.func,
};

export default RemoveButton;
