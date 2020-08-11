import React from "react";
import PropTypes from "prop-types";
import { FaPencilAlt } from "react-icons/fa";

import classes from "./EditButton.module.css";

function EditButton({ disabled, onClick }) {
  return (
    <td className={classes.EditButton}>
      {!disabled && (
        <div className={classes.Button} onClick={onClick}>
          <FaPencilAlt />
        </div>
      )}
    </td>
  );
}

EditButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default EditButton;
