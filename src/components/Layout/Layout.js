import React from "react";

import Header from "./Header/Header";
import Content from "./Content/Content";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
