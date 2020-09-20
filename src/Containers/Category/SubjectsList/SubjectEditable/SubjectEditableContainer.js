import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { pickSubject } from "Store/actions";

export function SubjectEditableContainer({
  defaultEditMode,
  pickSubject,
  render,
}) {
  const [editMode, setEditMode] = useState(defaultEditMode);

  return render({
    editMode,
    setEditMode,
    pickSubject,
  });
}

SubjectEditableContainer.propTypes = {
  defaultEditMode: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  //redux
  pickSubject: PropTypes.func.isRequired,
};

export default connect(null, { pickSubject })(SubjectEditableContainer);
