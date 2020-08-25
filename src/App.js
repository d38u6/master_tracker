import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setCategories, setSubjects, setRecords } from "./store/actions";
import {
  getCategories,
  getSubjects,
  getRecords,
} from "./utility/localStorageManager/localStorageManager";
import { initialCategories } from "./data/categories";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import Home from "./routes/Home";
import Category from "./routes/Category";
import Settings from "./routes/Settings";

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
    setSubjects(subjectsLS || []);
  }, [setSubjects]);

  useEffect(() => {
    const recordsLS = getRecords();
    setRecords(recordsLS || []);
  }, [setRecords]);

  return (
    <Theme>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/category/:title/:id" exact component={Category} />
        <Route path="/settings" component={Settings} />
      </Layout>
    </Theme>
  );
}

export default connect(null, { setCategories, setSubjects, setRecords })(App);
