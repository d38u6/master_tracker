import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <Container className="content">{children}</Container>
  </>
);

export default Layout;
