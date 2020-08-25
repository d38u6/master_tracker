import React from "react";
import PropTypes from "prop-types";
import classes from "./SettingsWrapper.module.css";

function SettingsWrapper({ className, children }) {
  return (
    <div className={[classes.SettingsWrapper, className || ""].join(" ")}>
      {children}
    </div>
  );
}

SettingsWrapper.propTypes = {
  className: PropTypes.string,
};

export default SettingsWrapper;
