import React from "react";
import PropTypes from "prop-types";
import { Col, Image } from "react-bootstrap";
import classes from "./ImageBox.module.css";

function ImageBox({ src, active, onClick }) {
  return (
    <Col xs="6" md="4" className={classes.ImgWrapper} onClick={onClick}>
      <Image
        className={[classes.Img, active ? classes.Active : null].join(" ")}
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
