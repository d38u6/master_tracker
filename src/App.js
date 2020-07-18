import React from "react";
import { Route } from "react-router-dom";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import CategoriesListContainer from "./containers/CategoriesList/CategoriesListContainer";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Category from "./components/Category/Category";

const categories = (
  <Route
    path="/"
    exact
    render={() => (
      <CategoriesListContainer
        render={({ categories, addCategory }) => (
          <CategoriesList categories={categories} onAddClick={addCategory} />
        )}
      />
    )}
  />
);

const category = <Route path="/category" exact render={() => <Category />} />;

function App() {
  return (
    <Theme>
      <Layout>
        {categories}
        {category}
      </Layout>
    </Theme>
  );
}

export default App;
