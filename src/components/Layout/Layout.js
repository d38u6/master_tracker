import React from "react";

import Header from "./Header/Header";
import Content from "./Content/Content";

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

export default Layout;
