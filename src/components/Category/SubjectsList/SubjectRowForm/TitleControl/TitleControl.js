import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

import classes from "./TitleControl.module.css";

function TitleControl({ value, onChange }) {
  return (
    <td className={classes.InputWrapper} colSpan="2">
      <Form.Control
        className={classes.TitleInput}
        type="text"
        placeholder="Title"
        value={value}
        onChange={onChange}
      />
    </td>
  );
}

TitleControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleControl;
