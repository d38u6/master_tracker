import React from "react";
import PropTypes from "prop-types";
import { Modal, Row } from "react-bootstrap";

import withTheme from "../../../../HOC/withTheme";
import classes from "./ImagesModal.module.css";

function ImagesModal({ show, onHide, theme, children }) {
  const themeClassName = theme.bg.charAt(0).toUpperCase() + theme.bg.slice(1);
  return (
    <Modal show={show} onHide={onHide} animation={false}>
      {/*Animation False is wolkaround to error off strict mode */}
      <div className={classes[themeClassName]}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>{children}</Row>
        </Modal.Body>
      </div>
    </Modal>
  );
}

ImagesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onChooseImage: PropTypes.func,
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.oneOf(["dark", "light"]),
  }),
};

export default withTheme(ImagesModal);
