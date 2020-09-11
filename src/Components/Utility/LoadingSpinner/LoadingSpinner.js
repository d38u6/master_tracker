import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Row, Col } from "react-bootstrap";
import withTheme from "HOC/withTheme";

import classes from "./LoadingSpinner.module.css";

export function LoadingSpinner({ theme }) {
  return (
    <div className={classes.SpinnerWrapper}>
      <Row>
        <Col>
          <div
            className={classNames(classes.LdsGrid, {
              [classes.Light]: theme.bg === "dark",
            })}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
LoadingSpinner.propTypes = {
  //theme Context
  theme: PropTypes.shape({
    bg: PropTypes.oneOf(["dark", "light"]).isRequired,
    text: PropTypes.oneOf(["dark", "light"]).isRequired,
  }).isRequired,
};
export default withTheme(LoadingSpinner);
