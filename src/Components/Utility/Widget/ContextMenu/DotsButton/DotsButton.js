import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./DotsButton.module.css";

const DotsButton = forwardRef(({ className, onClick }, ref) => (
  <div
    className={classNames(classes.Button, className)}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    ref={ref}
  >
    <span className={classes.Dot}></span>
    <span className={classes.Dot}></span>
    <span className={classes.Dot}></span>
  </div>
));

DotsButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default DotsButton;
