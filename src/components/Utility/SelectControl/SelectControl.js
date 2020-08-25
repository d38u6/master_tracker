import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

function SelectControl({ value, options, onChange }) {
  return (
    <Form.Control as="select" onChange={onChange} value={value} custom>
      {options.map(({ id, caption }) => (
        <option key={id} value={id}>
          {caption}
        </option>
      ))}
    </Form.Control>
  );
}

SelectControl.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectControl;
