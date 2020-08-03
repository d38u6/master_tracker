import React, { memo } from "react";
import PropTypes from "prop-types";

import AddTimeButton from "./AddTimeButton/AddTimeButton";
import EditButton from "./EditButton/EditButton";

export function SubjectRow({
  id,
  title,
  summaryTime,
  pickSubject,
  setEditMode,
  setShowTimeForm,
}) {
  return (
    <tr onClick={() => pickSubject(id)}>
      <td>{title}</td>
      <td>{summaryTime}</td>
      <AddTimeButton onClick={() => setShowTimeForm(true)} />
      <EditButton onClick={() => setEditMode(true)} />
    </tr>
  );
}

SubjectRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summaryTime: PropTypes.number.isRequired,
  pickSubject: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  setShowTimeForm: PropTypes.func.isRequired,
};

export default memo(SubjectRow);
