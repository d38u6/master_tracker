import React, { memo } from "react";
import PropTypes from "prop-types";
import { parseMinutes } from "../../../utility/time";
import RemoveButtonCol from "../../Utility/RemoveButtonCol/RemoveButtonCol";

function RecordRow({ id, date, value, subjectTitle, removeRecord }) {
  return (
    <tr>
      <td>{subjectTitle}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{parseMinutes(value)}</td>
      <RemoveButtonCol onClick={() => removeRecord(id)} />
    </tr>
  );
}

RecordRow.propTypes = {
  id: PropTypes.string.isRequired,
  subjectTitle: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  removeRecord: PropTypes.func.isRequired,
};

export default memo(RecordRow);
