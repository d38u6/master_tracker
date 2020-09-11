import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import Theme from "Components/Theme/Theme";
import ModalWithTheme from "Components/Utility/WithTheme/ModalWithTheme/ModalWithTheme";

function ConfirmModal({ title, body, options }) {
  return (
    <Theme>
      <ModalWithTheme show={true} animation={false} backdrop="static" centered>
        <Modal.Header>
          <Modal.Title>
            <span>{title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>{body}</span>
        </Modal.Body>
        <Modal.Footer>
          {options.map(({ caption, ...rest }) => (
            <Button key={caption} {...rest}>
              <span>{caption}</span>
            </Button>
          ))}
        </Modal.Footer>
      </ModalWithTheme>
    </Theme>
  );
}

ConfirmModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      variant: PropTypes.string,
      onClick: PropTypes.func,
      className: PropTypes.string,
    })
  ).isRequired,
};

export default ConfirmModal;
