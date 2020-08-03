import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setCategories, setSubjects, setRecords } from "./store/actions";
import {
  getCategories,
  getSubjects,
} from "./utility/localStorageManager/localStorageManager";
import { initialCategories } from "./data/categories";
import { subjects as fixturesSubjects } from "./data/fixtures";
import { generateRecords } from "./data/recordsGenerator";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import Home from "./routes/Home";
import Category from "./routes/Category";

export function App({ setCategories, setSubjects, setRecords }) {
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
  }, [setSubjects]);

  useEffect(() => {
    setRecords([...generateRecords("0", "1", 250)]);
  }, [setRecords]);

  return (
    <Theme>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/category/:title/:id" exact component={Category} />
      </Layout>
    </Theme>
  );
}

export default connect(null, { setCategories, setSubjects, setRecords })(App);
