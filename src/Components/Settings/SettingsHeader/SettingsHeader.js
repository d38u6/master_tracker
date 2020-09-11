import React from "react";
import PropTypes from "prop-types";
import classes from "./SettingsHeader.module.css";

function SettingsHeader({ title }) {
  return <h4 className={classes.Header}>{title}</h4>;
}

SettingsHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SettingsHeader;
