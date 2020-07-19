import React from "react";
import PropTypes from "prop-types";

import classes from "./SubjectsList.module.css";
import TableWithTheme from "../../Utility/TableWithTheme/TableWithTheme";

function SubjectsList({ subjects }) {
  return (
    <TableWithTheme className={classes.SubjectsList} striped hover size="sm">
      <tbody>
        {subjects.map(({ id, title, summaryTime }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{summaryTime}</td>
            <td>ADD</td>
            <td>E and D</td>
          </tr>
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
