import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  editSubject,
  removeSubject,
  removeRecordsForSubject,
} from "Store/actions";
import { showAlert } from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

export function SubjectFormContainer({
  subjectId,
  subjects,
  editSubject,
  removeSubject,
  removeRecordsForSubject,
  setEditMode,
  render,
}) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const subject = subjects.find(({ id }) => id === subjectId);
    if (subject) {
      setTitle(subject.title);
    }
  }, [subjectId, subjects]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSaveHandler = () => {
    editSubject(subjectId, { title });
    setEditMode(false);
    showAlert(Alerts.ChangesSaved);
  };

  const removeSubjectHandler = () => {
    removeSubject(subjectId);
    showAlert(Alerts.SubjectRemoved);
  };

  const removeSubjectAndRecordsHandler = () => {
    removeRecordsForSubject(subjectId);
    removeSubjectHandler();
  };

  const onRemoveHandler = () => {
    showAlert(Alerts.SubjectRemoveConfirm, {
      onRemove: removeSubjectAndRecordsHandler,
      onRemoveWithoutRecords: removeSubjectHandler,
    });
  };

  return render({
    titleConf: { value: title, onChange: titleChangeHandler },
    onApplyClick: onSaveHandler,
    onRemoveClick: onRemoveHandler,
  });
}

SubjectFormContainer.propTypes = {
  subjectId: PropTypes.string.isRequired,
  setEditMode: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  //redux
  subjects: PropTypes.array.isRequired,
  editSubject: PropTypes.func.isRequired,
  removeSubject: PropTypes.func.isRequired,
  removeRecordsForSubject: PropTypes.func.isRequired,
};

function mapStateToProps({ subjects }) {
  return { subjects };
}

export default connect(mapStateToProps, {
  editSubject,
  removeSubject,
  removeRecordsForSubject,
})(SubjectFormContainer);
