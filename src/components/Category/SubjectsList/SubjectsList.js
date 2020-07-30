import React from "react";
import PropTypes from "prop-types";

import classes from "./SubjectsList.module.css";

import TableWithTheme from "../../Utility/TableWithTheme/TableWithTheme";

import SubjectEditableContainer from "../../../containers/Category/SubjectEditable/SubjectEditableContainer";
import SubjectFormContainer from "../../../containers/Category/SubjectForm/SubjectFormContainer";
import SubjectRow from "./SubjectRow/SubjectRow";
import SubjectRowForm from "./SubjectRowForm/SubjectRowForm";

import AddButton from "./AddButton/AddButton";

function SubjectsList({ subjects, onAddClick }) {
  return (
    <TableWithTheme className={classes.SubjectsList} striped hover size="sm">
      <tbody>
        {subjects.map((subject) => (
          <SubjectEditableContainer
            key={subject.id}
            render={({
              editMode,
              setEditMode,
              showTimeForm,
              setShowTimeForm,
              pickSubject,
            }) =>
              editMode ? (
                <SubjectFormContainer
                  subjectId={subject.id}
                  setEditMode={setEditMode}
                  render={(formConf) => <SubjectRowForm {...formConf} />}
                />
              ) : (
                <>
                  {showTimeForm && (
                    <h1 onClick={() => setShowTimeForm(false)}>TimeForm</h1>
                  )}
                  <SubjectRow
                    {...subject}
                    pickSubject={pickSubject}
                    setEditMode={setEditMode}
                    setShowTimeForm={setShowTimeForm}
                  />
                </>
              )
            }
          />
        ))}
        <AddButton onClick={onAddClick} />
      </tbody>
    </TableWithTheme>
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
