import React from "react";
import SubjectsList from "./SubjectsList/SubjectsList";
import SubjectsListsContainer from "../../containers/Category/SubjectsList/SubjectsListsContainer";

function Category(props) {
  return (
    <>
      <SubjectsListsContainer
        render={(subjects) => <SubjectsList subjects={subjects} />}
      />
    </>
  );
}

export default Category;
