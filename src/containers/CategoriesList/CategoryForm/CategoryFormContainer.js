import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  editCategory,
  removeCategory,
} from "../../../store/actions/categories/categories";

function CategoryFormContainer({
  categories,
  editCategory,
  removeCategory,
  categoryId,
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
    onSave();
    editCategory(categoryId, { imageSrc, title, desc });
  };

  const onRemoveHandler = () => {
    if (categories.length > 1) {
      removeCategory(categoryId);
    } else {
      console.log("You can not delete last category");
    }
  };

  return render({
    titleConf: { value: title, onChange: titleChangeHandler },
    descConf: { value: desc, onChange: descChangeHandler },
    imageConf: { src: imageSrc, onChange: onImageChangeHandler },
    onSaveClick: onSaveHandler,
    onRemoveClick: onRemoveHandler,
  });
}

CategoryFormContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  //redux
  categories: PropTypes.array.isRequired,
  editCategory: PropTypes.func.isRequired,
  removeCategory: PropTypes.func.isRequired,
};

function mapDispatchToProps({ categories }) {
  return { categories };
}

export default connect(mapDispatchToProps, { editCategory, removeCategory })(
  CategoryFormContainer
);
