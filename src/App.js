import React from "react";
import { Route } from "react-router-dom";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import CategoriesListContainer from "./containers/CategoriesList/CategoriesListContainer";

function App() {
  return (
    <Theme>
      <Layout>
        <Route
          path="/"
          exact
          render={() => (
            <CategoriesListContainer
              render={({ categories, addCategory }) => (
                <CategoriesList
                  categories={categories}
                  onAddClick={addCategory}
                />
              )}
            />
          )}
        />
      </Layout>
    </Theme>
  );
}

export default App;
