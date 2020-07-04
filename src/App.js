import React from "react";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import CategoriesContainer from "./containers/CategoriesContainer";

function App() {
  return (
    <Theme>
      <Layout>
        <CategoriesContainer
          render={(categories) => <CategoriesList categories={categories} />}
        />
      </Layout>
    </Theme>
  );
}

export default App;
