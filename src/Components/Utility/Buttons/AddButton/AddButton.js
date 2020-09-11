import React from "react";
import PropTypes from "prop-types";
import { Button, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

import classes from "./AddButton.module.css";

function AddButton({ onClick }) {
  return (
    <Col md="4" className={classes.ButtonWrapper}>
      <Button variant="success" className={classes.AddButton} onClick={onClick}>
        <FaPlus />
      </Button>
    </Col>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
