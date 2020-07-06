import React from "react";
import { Container } from "react-bootstrap";

function Content({ children }) {
  return <Container className="content">{children}</Container>;
}

export default Content;
