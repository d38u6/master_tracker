import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import withTheme from "../../../HOC/withTheme";

import classes from "./ModalWithTheme.module.css";

function ModalWithTheme({ theme, children, ...props }) {
  const themeClassName = theme.bg.charAt(0).toUpperCase() + theme.bg.slice(1);
  return (
    <Modal {...props}>
      <div className={classes[themeClassName]}>{children}</div>
    </Modal>
  );
}

ModalWithTheme.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]).isRequired,
    text: PropTypes.oneOf(["dark", "light"]).isRequired,
  }).isRequired,
};

export default withTheme(ModalWithTheme);
