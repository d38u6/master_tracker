import React from "react";
import PropTypes from "prop-types";
import { Form, Row, Col } from "react-bootstrap";

import classes from "./SettingForm.module.css";

function SettingForm({ id, label, children }) {
  return (
    <Form className={classes.Form}>
      <Form.Group as={Row} controlId={id}>
        <Form.Label column sm={4} className={classes.Label}>
          {label}
        </Form.Label>
        <Col sm={8} className={classes.Control}>
          {children}
        </Col>
      </Form.Group>
    </Form>
  );
}

SettingForm.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SettingForm;
