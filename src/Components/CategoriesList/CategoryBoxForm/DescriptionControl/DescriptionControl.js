import React from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";

function DescriptionControl({ value, onChange }) {
  return (
    <Card.Text>
      <Form.Control
        as="textarea"
        rows="3"
        placeholder="Category description"
        value={value}
        onChange={onChange}
      />
    </Card.Text>
  );
}

DescriptionControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DescriptionControl;
