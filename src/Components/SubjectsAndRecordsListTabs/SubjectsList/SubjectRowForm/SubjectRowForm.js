import React from "react";
import PropTypes from "prop-types";

import RemoveButtonCol from "Components/Utility/Buttons/RemoveButtonCol/RemoveButtonCol";

import TitleControl from "./TitleControl/TitleControl";
import ApplyButton from "./ApplyButton/ApplyButton";
import PositionControls from "./PositionControls/PositionControls";

function SubjectRowForm({
  titleConf,
  moveUp,
  moveDown,
  onApplyClick,
  onRemoveClick,
}) {
  return (
    <tr>
      <TitleControl {...titleConf} />
      <PositionControls moveUp={moveUp} moveDown={moveDown} />
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
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  onApplyClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default SubjectRowForm;
