import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function CategoryImage({ src }) {
  return (
    <Card.Img
      variant="top"
      src={src}
      style={{ height: "160px", objectFit: "cover" }}
    />
  );
}

CategoryImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CategoryImage;
