import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { pickSubject } from "../../../store/actions";

export function SubjectEditableContainer({ pickSubject, render }) {
  const [editMode, setEditMode] = useState(false);
  const [showTimeForm, setShowTimeForm] = useState(false);

  return render({
    editMode,
    setEditMode,
    showTimeForm,
    setShowTimeForm,
    pickSubject,
  });
}

SubjectEditableContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  pickSubject: PropTypes.func.isRequired,
};

export default connect(null, { pickSubject })(SubjectEditableContainer);
