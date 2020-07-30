import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { editSubject, removeSubject } from "../../../store/actions";

export function SubjectFormContainer({
  subjectId,
  subjects,
  editSubject,
  removeSubject,
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
  };

  const onRemoveHandler = () => {
    removeSubject(subjectId);
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
};

function mapStateToProps({ subjects }) {
  return { subjects };
}

export default connect(mapStateToProps, { editSubject, removeSubject })(
  SubjectFormContainer
);
