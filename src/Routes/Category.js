import React from "react";

import CategoryContainer from "Containers/Category/CategoryContainer";
import Dashboard from "Components/Dashboard/Dashboard";
import SubjectsAndRecordsListTabs from "Components/SubjectsAndRecordsListTabs/SubjectsAndRecordsListTabs";

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
