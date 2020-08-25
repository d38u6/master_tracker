import React from "react";
import PropTypes from "prop-types";
import classes from "./TimeControl.module.css";
import { Form } from "react-bootstrap";

function TimeControl({ value, onChange, label, className, ...rest }) {
  return (
    <div className={[classes.TimeControl, className || ""].join(" ")}>
      <Form.Control type="number" value={value} onChange={onChange} {...rest} />
      <Form.Label>{label}</Form.Label>
    </div>
  );
}

TimeControl.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default TimeControl;
