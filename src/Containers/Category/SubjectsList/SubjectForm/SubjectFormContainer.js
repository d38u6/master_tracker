import { useState } from "react";
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
  subject,
  subjects,
  editSubject,
  removeSubject,
  removeRecordsForSubject,
  setEditMode,
  render,
}) {
  const [title, setTitle] = useState(subject.title);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSaveHandler = () => {
    editSubject(subject.id, { title });
    setEditMode(false);
    showAlert(Alerts.ChangesSaved);
  };

  const removeSubjectHandler = () => {
    removeSubject(subject.id);
    showAlert(Alerts.SubjectRemoved);
  };

  const removeSubjectAndRecordsHandler = () => {
    removeRecordsForSubject(subject.id);
    removeSubjectHandler();
  };

  const onRemoveHandler = () => {
    showAlert(Alerts.SubjectRemoveConfirm, {
      onRemove: removeSubjectAndRecordsHandler,
      onRemoveWithoutRecords: removeSubjectHandler,
    });
  };

  const handlerMoveUp = () => {
    if (subject.position > 1) {
      editSubject(subject.id, { position: subject.position - 1 });
      const upperSubject = subjects.find(
        ({ position }) => position === subject.position - 1
      );
      editSubject(upperSubject.id, { position: upperSubject.position + 1 });
    }
  };

  const handlerMoveDown = () => {
    if (subject.position < subjects.length - 1) {
      editSubject(subject.id, { position: subject.position + 1 });
      const bottomSubject = subjects.find(
        ({ position }) => position === subject.position + 1
      );
      editSubject(bottomSubject.id, { position: bottomSubject.position - 1 });
    }
  };

  return render({
    titleConf: { value: title, onChange: titleChangeHandler },
    moveUp: handlerMoveUp,
    moveDown: handlerMoveDown,
    onApplyClick: onSaveHandler,
    onRemoveClick: onRemoveHandler,
  });
}

SubjectFormContainer.propTypes = {
  subject: PropTypes.object.isRequired,
  setEditMode: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
  //redux
  editSubject: PropTypes.func.isRequired,
  removeSubject: PropTypes.func.isRequired,
  removeRecordsForSubject: PropTypes.func.isRequired,
};

export default connect(null, {
  editSubject,
  removeSubject,
  removeRecordsForSubject,
})(SubjectFormContainer);
