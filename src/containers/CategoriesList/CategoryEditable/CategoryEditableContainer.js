import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { pickCategory } from "../../../store/actions";

export function CategoryEditableContainer({ pickCategory, render }) {
  const [editMode, setEditMode] = useState(false);

  return render({ editMode, setEditMode, pickCategory });
}

CategoryEditableContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default connect(null, { pickCategory })(CategoryEditableContainer);
