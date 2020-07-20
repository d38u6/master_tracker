import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setCategories, setSubjects } from "./store/actions";
import {
  getCategories,
  getSubjects,
} from "./utility/localStorageManager/localStorageManager";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import CategoriesListContainer from "./containers/CategoriesList/CategoriesListContainer";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Category from "./components/Category/Category";

import { initialCategories } from "./data/categories";
import { subjects as fixturesSubjects } from "./data/fixtures";

const categories = (
  <Route
    path="/"
    exact
    render={() => (
      <CategoriesListContainer
        render={({ categories, addCategory, pickCategory }) => (
          <CategoriesList
            categories={categories}
            onAddClick={addCategory}
            pickCategory={pickCategory}
          />
        )}
      />
    )}
  />
);

const category = (
  <Route path="/category/:title/:id" exact render={() => <Category />} />
);

export function App({ setCategories, setSubjects }) {
  useEffect(() => {
    const categoriesLS = getCategories();
    if (categoriesLS && categoriesLS.length > 0) {
      setCategories(categoriesLS);
    } else {
      setCategories(initialCategories);
    }
  }, [setCategories]);

  useEffect(() => {
    const subjectsLS = getSubjects();
    if (subjectsLS && subjectsLS.length > 0) {
      setSubjects(subjectsLS);
    } else {
      setSubjects(fixturesSubjects);
    }
  });

  return (
    <Theme>
      <Layout>
        {categories}
        {category}
      </Layout>
    </Theme>
  );
}

export default connect(null, { setCategories, setSubjects })(App);
