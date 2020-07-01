import React from "react";
import { Row } from "react-bootstrap";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import Category from "./components/Category/Category";

function App() {
  return (
    <Theme>
      <Layout>
        <Row>
          <Category title="ala ma kota" />
          <Category title="ala ma kota" />
          <Category title="ala ma kota" />
        </Row>
      </Layout>
    </Theme>
  );
}

export default App;
