import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./SettingsWrapper.module.css";

function SettingsWrapper({ className, children }) {
  return (
    <div className={classNames(classes.SettingsWrapper, className)}>
      {children}
    </div>
  );
}

SettingsWrapper.propTypes = {
  className: PropTypes.string,
};

export default SettingsWrapper;
