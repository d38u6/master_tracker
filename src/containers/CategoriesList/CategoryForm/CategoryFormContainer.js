import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  editCategory,
  removeCategory,
} from "../../../store/actions/categories/categories";

export function CategoryFormContainer({
  categories,
  categoryId,
  editCategory,
  removeCategory,
  onSave,
  render,
}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const category = categories.find(({ id }) => id === categoryId);
    if (category) {
      setTitle(category.title);
      setDesc(category.desc);
      setImageSrc(category.imageSrc);
    }
  }, [categories, categoryId]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const onImageChangeHandler = (imageSrc) => {
    setImageSrc(imageSrc);
  };

  const onSaveHandler = () => {
    editCategory(categoryId, { imageSrc, title, desc });
    onSave();
  };

  const onRemoveHandler = () => {
    removeCategory(categoryId);
  };

  return render({
    titleConf: { value: title, onChange: titleChangeHandler },
    descConf: { value: desc, onChange: descChangeHandler },
    imageConf: { src: imageSrc, onChange: onImageChangeHandler },
    onApplyClick: onSaveHandler,
    onRemoveClick: onRemoveHandler,
  });
}

CategoryFormContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  //redux
  categories: PropTypes.array.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};

function mapStateToProps({ categories }) {
  return { categories };
}

export default connect(mapStateToProps, { editCategory, removeCategory })(
  CategoryFormContainer
);
