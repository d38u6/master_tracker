import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Form } from "react-bootstrap";

import classes from "./TimeControl.module.css";

function TimeControl({ value, onChange, label, className, ...rest }) {
  return (
    <div className={classNames(classes.TimeControl, className)}>
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
