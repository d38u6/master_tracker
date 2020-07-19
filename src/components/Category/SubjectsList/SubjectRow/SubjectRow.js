import React from "react";
import PropTypes from "prop-types";

import AddTimeButton from "./AddTimeButton/AddTimeButton";
import EditButton from "./EditButton/EditButton";

function SubjectRow({ id, title, summaryTime, onEditClick }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{summaryTime}</td>
      <AddTimeButton />
      <EditButton onClick={onEditClick} />
    </tr>
  );
}

SubjectRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summaryTime: PropTypes.string.isRequired,
  onEditClick: PropTypes.func,
};

export default SubjectRow;
