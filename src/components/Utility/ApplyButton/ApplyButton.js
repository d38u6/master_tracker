import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

import classes from "./ApplyButton.module.css";

function ApplyButton({ onClick, className }) {
  return (
    <div
      className={[classes.ApplyButton, className].join(" ")}
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
