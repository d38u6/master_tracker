import React from "react";
import PropTypes from "prop-types";
import { FaPencilAlt } from "react-icons/fa";

import classes from "./EditButton.module.css";

function EditButton({ onClick }) {
  return (
    <div className={classes.EditButton} onClick={onClick}>
      <FaPencilAlt />
    </div>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func,
};

export default EditButton;
