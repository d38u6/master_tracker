import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "react-bootstrap";

import classes from "./CategoryBoxWrapper.module.css";

function CategoryBoxWrapper({ className, children }) {
  return (
    <Col md="4">
      <div className={classNames(classes.CategoryBox, className)}>
        {children}
      </div>
    </Col>
  );
}

CategoryBoxWrapper.propTypes = {
  className: PropTypes.string,
};

export default CategoryBoxWrapper;
