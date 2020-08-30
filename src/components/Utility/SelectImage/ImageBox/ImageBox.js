import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col, Image } from "react-bootstrap";
import classes from "./ImageBox.module.css";

function ImageBox({ src, active, onClick }) {
  return (
    <Col xs="6" md="4" className={classes.ImgWrapper} onClick={onClick}>
      <Image
        className={classNames(classes.Img, { [classes.Active]: active })}
        src={src}
      />
    </Col>
  );
}

ImageBox.propTypes = {
  src: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ImageBox;
