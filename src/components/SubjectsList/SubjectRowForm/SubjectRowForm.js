import React from "react";
import PropTypes from "prop-types";

import TitleControl from "./TitleControl/TitleControl";
import RemoveButtonCol from "../../Utility/RemoveButtonCol/RemoveButtonCol";
import ApplyButton from "./ApplyButton/ApplyButton";

function SubjectRowForm({ titleConf, onApplyClick, onRemoveClick }) {
  return (
    <tr>
      <TitleControl {...titleConf} />
      <RemoveButtonCol onClick={onRemoveClick} />
      <ApplyButton onClick={onApplyClick} />
    </tr>
  );
}

SubjectRowForm.propTypes = {
  titleConf: PropTypes.shape({
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  onApplyClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default SubjectRowForm;
