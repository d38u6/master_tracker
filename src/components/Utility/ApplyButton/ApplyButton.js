import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

import classes from "./ApplyButton.module.css";

const ApplyButton = ({ onClick }) => {
  return (
    <div className={classes.ApplyButton} onClick={onClick}>
      <FaCheck />
    </div>
  );
};

ApplyButton.propTypes = {
  onClick: PropTypes.func,
};

export default ApplyButton;
