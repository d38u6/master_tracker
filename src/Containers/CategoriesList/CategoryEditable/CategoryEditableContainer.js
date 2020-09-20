import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { pickCategory } from "Store/actions";

export function CategoryEditableContainer({
  defaultEditMode,
  pickCategory,
  render,
}) {
  const [editMode, setEditMode] = useState(defaultEditMode);

  return render({ editMode, setEditMode, pickCategory });
}

CategoryEditableContainer.propTypes = {
  defaultEditMode: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  //redux
  pickCategory: PropTypes.func.isRequired,
};

export default connect(null, { pickCategory })(CategoryEditableContainer);
