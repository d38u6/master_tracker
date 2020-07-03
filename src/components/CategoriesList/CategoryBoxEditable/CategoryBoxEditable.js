import React, { useState } from "react";
import PropTypes from "prop-types";

import CategoryBox from "../CategoryBox/CategoryBox";
import CategoryFormContainer from "../../../containers/CategoryFormContainer";
import CategoryBoxForm from "../CategoryBoxForm/CategoryBoxForm";

const CategoryBoxEditable = (categoryProps) => {
  const [editMode, setEditMode] = useState(false);

  const turnOnEditMode = () => setEditMode(true);
  const turnOffEditMode = () => setEditMode(false);

  return editMode ? (
    <CategoryFormContainer
      categoryId={categoryProps.id}
      onSave={turnOffEditMode}
      render={(formConf) => <CategoryBoxForm {...formConf} />}
    />
  ) : (
    <CategoryBox {...categoryProps} onEditClick={turnOnEditMode} />
  );
};

CategoryBoxEditable.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.number,
};

export default CategoryBoxEditable;
