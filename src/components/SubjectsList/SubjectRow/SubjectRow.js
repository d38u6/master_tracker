import React, { memo } from "react";
import PropTypes from "prop-types";
import EditButton from "./EditButton/EditButton";
import AddTime from "./AddTime/AddTime";

export function SubjectRow({
  id,
  categoryId,
  title,
  summaryTime,
  pickSubject,
  setEditMode,
}) {
  return (
    <tr>
      <td onClick={() => pickSubject(id)}>{title}</td>
      <td>{summaryTime}</td>
      <AddTime categoryId={categoryId} subjectId={id} title={title} />
      <EditButton onClick={() => setEditMode(true)} />
    </tr>
  );
}

SubjectRow.propTypes = {
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summaryTime: PropTypes.number.isRequired,
  pickSubject: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default memo(SubjectRow);
