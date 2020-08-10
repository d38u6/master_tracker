import React, { memo } from "react";
import PropTypes from "prop-types";
import EditButton from "./EditButton/EditButton";
import AddTime from "./AddTime/AddTime";
import classes from "./SubjectRow.module.css";
import { parseMinutes } from "../../../utility/time";

export function SubjectRow({
  id,
  categoryId,
  active,
  title,
  summaryTime,
  pickSubject,
  setEditMode,
}) {
  return (
    <tr className={active ? classes.Active : ""}>
      <td
        className={classes.Title}
        onClick={() =>
          pickSubject(active ? null : id === "general" ? null : id)
        }
      >
        {title}
      </td>
      <td>{parseMinutes(summaryTime)}</td>
      <AddTime categoryId={categoryId} subjectId={id} title={title} />
      <EditButton onClick={() => setEditMode(true)} />
    </tr>
  );
}

SubjectRow.propTypes = {
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  summaryTime: PropTypes.number.isRequired,
  pickSubject: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default memo(SubjectRow);
