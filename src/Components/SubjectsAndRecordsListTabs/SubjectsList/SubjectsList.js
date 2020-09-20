import React from "react";
import PropTypes from "prop-types";

import SubjectEditableContainer from "Containers/Category/SubjectsList/SubjectEditable/SubjectEditableContainer";
import SubjectFormContainer from "Containers/Category/SubjectsList/SubjectForm/SubjectFormContainer";
import TableStriped from "Components/Utility/TableStriped/TableStriped";

import SubjectRow from "./SubjectRow/SubjectRow";
import SubjectRowForm from "./SubjectRowForm/SubjectRowForm";

import AddButton from "./AddButton/AddButton";

function SubjectsList({ subjects, onAddClick }) {
  return (
    <TableStriped>
      {subjects.map((subject) => (
        <SubjectEditableContainer
          key={subject.id}
          defaultEditMode={Boolean(subject.editMode)}
          render={({ editMode, setEditMode, pickSubject }) =>
            editMode ? (
              <SubjectFormContainer
                subjectId={subject.id}
                setEditMode={setEditMode}
                render={(formConf) => <SubjectRowForm {...formConf} />}
              />
            ) : (
              <SubjectRow
                {...subject}
                pickSubject={pickSubject}
                setEditMode={setEditMode}
              />
            )
          }
        />
      ))}
      <AddButton onClick={onAddClick} />
    </TableStriped>
  );
}

SubjectsList.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summaryTime: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddClick: PropTypes.func,
};

export default SubjectsList;
