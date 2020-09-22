import React from "react";
import PropTypes from "prop-types";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import classes from "./PositionControls.module.css";

function PositionControls({ moveUp, moveDown }) {
  return (
    <td className={classes.Controls}>
      <i onClick={moveUp}>
        <FaArrowCircleUp />
      </i>
      <i onClick={moveDown}>
        <FaArrowCircleDown />
      </i>
    </td>
  );
}

PositionControls.propTypes = {
  moveUp: PropTypes.func,
  moveDown: PropTypes.func,
};

export default PositionControls;
