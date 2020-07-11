import React from "react";
import PropTypes from "prop-types";
import classes from "./CategoryBoxWrapper.module.css";
import { Col } from "react-bootstrap";

function CategoryBoxWrapper({ className, children }) {
  return (
    <Col md="4">
      <div className={[classes.CategoryBox, className || ""].join(" ")}>
        {children}
      </div>
    </Col>
  );
}

CategoryBoxWrapper.propTypes = {
  className: PropTypes.string,
};

export default CategoryBoxWrapper;
