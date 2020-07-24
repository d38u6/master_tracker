import React from "react";
import SubjectsList from "./SubjectsList/SubjectsList";
import SubjectsListContainer from "../../containers/Category/SubjectsList/SubjectsListContainer";

function Category(props) {
  return (
    <>
      <SubjectsListContainer
        render={({ subjects, addSubject }) => (
          <SubjectsList subjects={subjects} onAddClick={addSubject} />
        )}
      />
    </>
  );
}

export default Category;
