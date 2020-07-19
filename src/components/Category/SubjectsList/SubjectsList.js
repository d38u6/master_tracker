import React from "react";
import PropTypes from "prop-types";

import classes from "./SubjectsList.module.css";

import TableWithTheme from "../../Utility/TableWithTheme/TableWithTheme";
import SubjectRowEditable from "./SubjectRowEditable/SubjectRowEditable";

function SubjectsList({ subjects }) {
  return (
    <TableWithTheme className={classes.SubjectsList} striped hover size="sm">
      <tbody>
        {subjects.map((subject) => (
          <SubjectRowEditable key={subject.id} {...subject} />
        ))}
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
      desc: PropTypes.string.isRequired,
      summaryTime: PropTypes.string.isRequired,
    })
  ),
};

export default SubjectsList;
