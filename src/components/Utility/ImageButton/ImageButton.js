import React from "react";
import PropTypes from "prop-types";
import { BsCardImage } from "react-icons/bs";

import classes from "./ImageButton.module.css";

function ImageButton({ onClick }) {
  return (
    <div className={classes.ImageButton} onClick={onClick}>
      <BsCardImage />
    </div>
  );
}

ImageButton.propTypes = {
  onClick: PropTypes.func,
};

export default ImageButton;
