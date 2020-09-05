import React from "react";
import PropTypes from "prop-types";
import ModalWithTheme from "../../../../../Utility/WithTheme/ModalWithTheme/ModalWithTheme";
import { Modal, Form } from "react-bootstrap";
import classes from "./TimeFormModal.module.css";

function TimeFormModal({ show, onHide, title, children }) {
  return (
    <ModalWithTheme show={show} onHide={onHide} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Time For "{title}"</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className={classes.Form}>{children}</Form>
      </Modal.Body>
    </ModalWithTheme>
  );
}

TimeFormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default TimeFormModal;
