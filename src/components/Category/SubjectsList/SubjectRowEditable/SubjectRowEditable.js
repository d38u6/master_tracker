import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import SubjectRow from "../SubjectRow/SubjectRow";
import SubjectRowForm from "../SubjectRowForm/SubjectRowForm";
import SubjectFormContainer from "../../../../containers/Category/SubjectsList/SubjectForm/SubjectFormContainer";

export function SubjectRowEditable(props) {
  const [editMode, setEditMode] = useState(false);

  const turnOnEditMode = () => setEditMode(true);
  const turnOffEditMode = () => setEditMode(false);

  return editMode ? (
    <SubjectFormContainer
      subjectId={props.id}
      onSave={turnOffEditMode}
      render={(formConf) => <SubjectRowForm {...formConf} />}
    />
  ) : (
    <SubjectRow {...props} onEditClick={turnOnEditMode} />
  );
}

SubjectRowEditable.propTypes = {
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  summaryTime: PropTypes.string.isRequired,
};

export default memo(SubjectRowEditable);
