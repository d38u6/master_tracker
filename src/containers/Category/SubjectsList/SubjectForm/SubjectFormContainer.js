import { useState } from "react";
import PropTypes from "prop-types";

function SubjectFormContainer({ subjectId, onSave, render }) {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSaveHandler = () => {
    console.log("save subject form");
    onSave();
  };

  const onRemoveHandler = () => {
    console.log("remove subject");
  };

  return render({
    titleConf: { value: title, onChange: titleChangeHandler },
    onApplyClick: onSaveHandler,
    onRemoveClick: onRemoveHandler,
  });
}

SubjectFormContainer.propTypes = {
  subjectId: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default SubjectFormContainer;
