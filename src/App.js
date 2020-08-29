import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  setSettings,
  setCategories,
  setSubjects,
  setRecords,
} from "./store/actions";
import {
  getSettings,
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
import defaultSettings from "./data/defaultSettings";

export function App({ setSettings, setCategories, setSubjects, setRecords }) {
  useEffect(() => {
    const settingsLS = getSettings();
    setSettings(settingsLS || defaultSettings);
  });

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

export default connect(null, {
  setSettings,
  setCategories,
  setSubjects,
  setRecords,
})(App);
