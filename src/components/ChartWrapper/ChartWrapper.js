import React from "react";
import PropTypes from "prop-types";
import classes from "./ChartWrapper.module.css";

function ChartWrapper({ className, children }) {
  return (
    <div className={[className || "", classes.Wrapper].join(" ")}>
      {children}
    </div>
  );
}

ChartWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default ChartWrapper;
