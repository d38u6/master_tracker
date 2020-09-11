import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Content.module.css";

function Content({ children }) {
  return <Container className={classes.Content}>{children}</Container>;
}

export default Content;
