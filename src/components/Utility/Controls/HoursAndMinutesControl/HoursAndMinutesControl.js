import React from "react";
import PropTypes from "prop-types";
import TimeControl from "../TimeControl/TimeControl";
import classes from "./HoursAndMinutesControl.module.css";

function HoursAndMinutesControl({ hoursConf, minConf, withMinMax }) {
  return (
    <>
      <TimeControl
        label="Hours"
        min={withMinMax ? "0" : ""}
        max={withMinMax ? "23" : ""}
        {...hoursConf}
      />
      <TimeControl
        label="Minutes"
        className={classes.MarginLeft}
        min={withMinMax ? "0" : ""}
        max={withMinMax ? "59" : ""}
        {...minConf}
      />
    </>
  );
}

HoursAndMinutesControl.propTypes = {
  hoursConf: PropTypes.shape({
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  minConf: PropTypes.shape({
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  withMinMax: PropTypes.bool,
};

export default HoursAndMinutesControl;
