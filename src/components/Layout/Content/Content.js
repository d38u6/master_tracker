import React from "react";
import { Container } from "react-bootstrap";

const Content = ({ children }) => (
  <Container className="content">{children}</Container>
);

export default Content;
