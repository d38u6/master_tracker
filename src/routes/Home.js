import React from "react";
import CategoriesListContainer from "../containers/CategoriesList/CategoriesListContainer";
import CategoriesList from "../components/CategoriesList/CategoriesList";

function Home() {
  return (
    <CategoriesListContainer
      render={({ categories, addCategory }) => (
        <CategoriesList categories={categories} onAddClick={addCategory} />
      )}
    />
  );
}

export default Home;
