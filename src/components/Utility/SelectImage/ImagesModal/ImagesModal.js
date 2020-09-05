import React from "react";
import PropTypes from "prop-types";
import { Modal, Row } from "react-bootstrap";

import ModalWithTheme from "../../WithTheme/ModalWithTheme/ModalWithTheme";

function ImagesModal({ show, onHide, children }) {
  return (
    <ModalWithTheme show={show} onHide={onHide} animation={false}>
      {/*Animation False is wolkaround to error off strict mode */}
      <Modal.Header closeButton>
        <Modal.Title>Choose Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>{children}</Row>
      </Modal.Body>
    </ModalWithTheme>
  );
}

ImagesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ImagesModal;
