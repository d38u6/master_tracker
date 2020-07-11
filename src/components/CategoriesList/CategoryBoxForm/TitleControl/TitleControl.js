import React from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";
import classes from "./TitleControl.module.css";

function TitleControl({ value, onChange }) {
  return (
    <Card.Title>
      <Form.Control
        className={classes.TitleInput}
        type="text"
        placeholder="Category Title"
        value={value}
        onChange={onChange}
      />
    </Card.Title>
  );
}

TitleControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TitleControl;
