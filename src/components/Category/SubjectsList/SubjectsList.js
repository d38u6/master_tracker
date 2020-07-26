import React from "react";
import PropTypes from "prop-types";

import classes from "./SubjectsList.module.css";

import TableWithTheme from "../../Utility/TableWithTheme/TableWithTheme";
import SubjectRowEditable from "./SubjectRowEditable/SubjectRowEditable";
import AddButton from "./AddButton/AddButton";

function SubjectsList({ subjects, onAddClick }) {
  return (
    <TableWithTheme className={classes.SubjectsList} striped hover size="sm">
      <tbody>
        {subjects.map((subject) => (
          <SubjectRowEditable key={subject.id} {...subject} />
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
