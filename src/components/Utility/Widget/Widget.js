import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import classes from "./Widget.module.css";

import ContextMenu from "./ContextMenu/ContextMenu";

function Widget({ name, className, children, ...props }) {
  const compoundChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { classes })
  );
  return (
    <Col {...props} className={[classes.Widget, className].join(" ")}>
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
