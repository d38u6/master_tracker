import React from "react";
import { Row } from "react-bootstrap";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import Subject from "./components/Subject/Subject";

function App() {
  return (
    <Theme>
      <Layout>
        <Row>
          <Subject />
          <Subject />
          <Subject />
        </Row>
      </Layout>
    </Theme>
  );
}

export default App;
