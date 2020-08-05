import React from "react";
import PropTypes from "prop-types";
import classes from "./ChartWrapper.module.css";

function ChartWrapper({ children }) {
  return <div className={classes.Wrapper}>{children}</div>;
}

ChartWrapper.propTypes = {
  children: PropTypes.element,
};

export default ChartWrapper;
