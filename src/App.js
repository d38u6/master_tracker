import React, { Suspense, useEffect, lazy } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  setSettings,
  setCategories,
  setSubjects,
  setRecords,
} from "Store/actions";
import {
  getSettings,
  getCategories,
  getSubjects,
  getRecords,
} from "Utility/localStorageManager";
import { initialCategories } from "Data/categories";
import defaultSettings from "Data/defaultSettings";

import Theme from "Components/Theme/Theme";
import Layout from "Components/Layout/Layout";
import LoadingSpinner from "Components/Utility/LoadingSpinner/LoadingSpinner";
import ErrorBundary from "Components/Utility/ErrorBoundary/ErrorBoundary";
import ErrorCmp from "Components/ErrorCmp/ErrorCmp";

const Home = lazy(() => import("Routes/Home"));
const Category = lazy(() => import("Routes/Category"));
const Settings = lazy(() => import("Routes/Settings"));

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
