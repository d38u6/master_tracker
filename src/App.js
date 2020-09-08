import React, { Suspense, useEffect, lazy } from "react";
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
} from "./utility/localStorageManager";
import { initialCategories } from "./data/categories";
import defaultSettings from "./data/defaultSettings";

import Theme from "./components/Theme/Theme";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/Utility/LoadingSpinner/LoadingSpinner";
import ErrorBundary from "./components/Utility/ErrorBoundary/ErrorBoundary";
import ErrorCmp from "./components/Utility/ErrorCmp/ErrorCmp";

const Home = lazy(() => import("./routes/Home"));
const Category = lazy(() => import("./routes/Category"));
const Settings = lazy(() => import("./routes/Settings"));

export function App({ setSettings, setCategories, setSubjects, setRecords }) {
  useEffect(() => {
    //init settings store
    const settingsLS = getSettings();
    setSettings(settingsLS || defaultSettings);

    //init categories store
    const categoriesLS = getCategories();
    if (categoriesLS && categoriesLS.length > 0) {
      setCategories(categoriesLS);
    } else {
      setCategories(initialCategories);
    }

    //init subjects store
    const subjectsLS = getSubjects();
    setSubjects(subjectsLS || []);

    //init records store
    const recordsLS = getRecords();
    setRecords(recordsLS || []);
  });

  return (
    <ErrorBundary errorCmp={ErrorCmp}>
      <Theme>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Route path="/" exact component={Home} />
            <Route path="/category/:title/:id" exact component={Category} />
            <Route path="/settings" component={Settings} />
          </Suspense>
        </Layout>
      </Theme>
    </ErrorBundary>
  );
}

export default connect(null, {
  setSettings,
  setCategories,
  setSubjects,
  setRecords,
})(App);
