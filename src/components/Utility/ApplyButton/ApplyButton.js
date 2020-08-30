import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";

import classes from "./ApplyButton.module.css";

function ApplyButton({ onClick, className }) {
  return (
    <div
      className={classNames(classes.ApplyButton, className)}
      onClick={onClick}
    >
      <FaCheck />
    </div>
  );
}

ApplyButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ApplyButton;
