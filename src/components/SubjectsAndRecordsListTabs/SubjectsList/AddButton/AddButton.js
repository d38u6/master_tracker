import React from "react";
import PropTypes from "prop-types";
import { BsPlus } from "react-icons/bs";

import RowButton from "../../../Utility/Buttons/RowButton/RowButton";
import classes from "./AddButton.module.css";

function AddButton({ onClick }) {
  return (
    <RowButton variant="success" onClick={onClick}>
      <span>Add New</span> <BsPlus className={classes.Icon} />
    </RowButton>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
