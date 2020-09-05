import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

import classes from "./ApplyButton.module.css";

function ApplyButton({ onClick }) {
  return (
    <td className={classes.ApplyButton}>
      <div className={classes.Button} onClick={onClick}>
        <FaCheck />
      </div>
    </td>
  );
}

ApplyButton.propTypes = {
  onClick: PropTypes.func,
};

export default ApplyButton;
