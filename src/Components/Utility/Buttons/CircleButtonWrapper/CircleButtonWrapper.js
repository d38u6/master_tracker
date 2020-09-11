import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./CircleButtonWrapper.module.css";

function CircleButtonWrapper({ className, children }) {
  return (
    <div className={classNames(classes.CircleButtonWrapper, className)}>
      {children}
    </div>
  );
}

CircleButtonWrapper.propTypes = {
  className: PropTypes.string,
};

export default CircleButtonWrapper;
