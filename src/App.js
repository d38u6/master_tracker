import React, { Suspense, useEffect, lazy } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  setSettings,
  setCategories,
  setSubjects,
  setRecords,
} from "Store/actions";

import Theme from "Components/Theme/Theme";
import Layout from "Components/Layout/Layout";
import LoadingSpinner from "Components/Utility/LoadingSpinner/LoadingSpinner";
import ErrorBundary from "Components/Utility/ErrorBoundary/ErrorBoundary";
import ErrorCmp from "Components/ErrorCmp/ErrorCmp";

//sample data
import sampleSettings from "Data/sampleData/settings";
import sampleCategoris from "Data/sampleData/categories";
import sampleSubjects from "Data/sampleData/subjects";
import sampleRecords from "Data/sampleData/records";

const Home = lazy(() => import("Routes/Home"));
const Category = lazy(() => import("Routes/Category"));
const Settings = lazy(() => import("Routes/Settings"));

export function App({ setSettings, setCategories, setSubjects, setRecords }) {
  useEffect(() => {
    //init settings store
    setSettings(sampleSettings);

    //init categories store
    setCategories(sampleCategoris);

    //init subjects store
    setSubjects(sampleSubjects);

    //init records store
    setRecords(sampleRecords);
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
