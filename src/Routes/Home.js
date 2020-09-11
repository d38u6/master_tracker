import React from "react";
import CategoriesListContainer from "Containers/CategoriesList/CategoriesListContainer";
import CategoriesList from "Components/CategoriesList/CategoriesList";

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
