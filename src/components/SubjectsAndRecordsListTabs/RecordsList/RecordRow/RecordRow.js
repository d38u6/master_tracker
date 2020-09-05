import React, { memo } from "react";
import PropTypes from "prop-types";
import { parseMinutes } from "../../../../utility/time";
import RemoveButtonCol from "../../../Utility/Buttons/RemoveButtonCol/RemoveButtonCol";

function RecordRow({ date, value, subjectTitle, removeRecord }) {
  return (
    <tr>
      <td>{subjectTitle}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>{parseMinutes(value)}</td>
      <RemoveButtonCol onClick={removeRecord} />
    </tr>
  );
}

RecordRow.propTypes = {
  subjectTitle: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  removeRecord: PropTypes.func.isRequired,
};

export default memo(RecordRow);
