import React from "react";

import CategoryContainer from "../containers/Category/CategoryContainer";
import Dashboard from "../components/Dashboard/Dashboard";
import SubjectsAndRecordsListTabs from "../components/SubjectsAndRecordsListTabs/SubjectsAndRecordsListTabs";

function Category() {
  return (
    <CategoryContainer
      render={({ subjects, records, addSubject }) => (
        <>
          <Dashboard records={records} />
          <SubjectsAndRecordsListTabs
            subjects={subjects}
            addSubject={addSubject}
            records={records}
          />
        </>
      )}
    />
  );
}

export default Category;
