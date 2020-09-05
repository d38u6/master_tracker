import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./ChartWrapper.module.css";

function ChartWrapper({ className, children }) {
  return (
    <div className={classNames(classes.Wrapper, className)}>{children}</div>
  );
}

ChartWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default ChartWrapper;
