import React from "react";
import PropTypes from "prop-types";

import classes from "./CircleButtonWrapper.module.css";

function CircleButtonWrapper({ className, children }) {
  return (
    <div className={[classes.CircleButtonWrapper, className].join(" ")}>
      {children}
    </div>
  );
}

CircleButtonWrapper.propTypes = {
  className: PropTypes.string,
};

export default CircleButtonWrapper;
