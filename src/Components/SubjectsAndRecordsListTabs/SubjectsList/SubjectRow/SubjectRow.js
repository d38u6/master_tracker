import React, { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { parseMinutes } from "Utility/time";

import EditButton from "./EditButton/EditButton";
import AddTime from "./AddTime/AddTime";
import classes from "./SubjectRow.module.css";

export function SubjectRow({
  id,
  categoryId,
  active,
  title,
  summaryTime,
  pickSubject,
  setEditMode,
  editable,
}) {
  return (
    <tr className={classNames({ [classes.Active]: active })}>
      <td
        className={classes.Title}
        onClick={() => pickSubject(active ? null : id)}
      >
        {title}
      </td>
      <td>{parseMinutes(summaryTime)}</td>
      <AddTime categoryId={categoryId} subjectId={id} title={title} />
      <EditButton onClick={() => setEditMode(true)} disabled={!editable} />
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
  editable: PropTypes.bool.isRequired,
};

export default memo(SubjectRow);
