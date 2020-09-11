import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "react-bootstrap";

import classes from "./BoxWrapper.module.css";

function BoxWrapper({ className, children }) {
  return (
    <Col md="4">
      <div className={classNames(classes.BoxWrapper, className)}>
        {children}
      </div>
    </Col>
  );
}

BoxWrapper.propTypes = {
  className: PropTypes.string,
};

export default BoxWrapper;
