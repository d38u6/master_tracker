import React from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";

function TitleControl({ value, onChange, className }) {
  return (
    <Card.Title>
      <Form.Control
        className={className}
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
  className: PropTypes.string,
};

export default TitleControl;
