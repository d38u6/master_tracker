import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "react-bootstrap";

import ContextMenu from "./ContextMenu/ContextMenu";

import classes from "./Widget.module.css";

function Widget({ name, className, children, ...props }) {
  const compoundChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { classes })
  );
  return (
    <Col {...props} className={classNames(classes.Widget, className)}>
      <span className={classes.Name}>{name}</span>
      {compoundChildren}
    </Col>
  );
}

Widget.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

Widget.ContextMenu = ContextMenu;

export default Widget;
