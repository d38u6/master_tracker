import React from "react";

import CategoryContainer from "../containers/Category/CategoryContainer";
import SubjectsList from "../components/SubjectsList/SubjectsList";
import Dashboard from "../components/Dashboard/Dashboard";

function Category() {
  return (
    <CategoryContainer
      render={({ subjects, records, addSubject }) => (
        <>
          <Dashboard records={records} />
          <SubjectsList subjects={subjects} onAddClick={addSubject} />
        </>
      )}
    />
  );
}

export default Category;
