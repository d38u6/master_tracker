import React, { memo, useState } from "react";
import PropTypes from "prop-types";

import CategoryBox from "../CategoryBox/CategoryBox";
import CategoryFormContainer from "../../../containers/CategoriesList/CategoryForm/CategoryFormContainer";
import CategoryBoxForm from "../CategoryBoxForm/CategoryBoxForm";

export function CategoryBoxEditable(props) {
  const [editMode, setEditMode] = useState(false);

  const turnOnEditMode = () => setEditMode(true);
  const turnOffEditMode = () => setEditMode(false);

  const onPickHandler = () => props.onPickCategory(props.id);

  return editMode ? (
    <CategoryFormContainer
      categoryId={props.id}
      onSave={turnOffEditMode}
      render={(formConf) => <CategoryBoxForm {...formConf} />}
    />
  ) : (
    <CategoryBox
      {...props}
      onEditClick={turnOnEditMode}
      onPick={onPickHandler}
    />
  );
}

CategoryBoxEditable.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.number,
  onPickCategory: PropTypes.func.isRequired,
};

export default memo(CategoryBoxEditable);
