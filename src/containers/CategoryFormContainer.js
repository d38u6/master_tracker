import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CategoryFormContainer = ({ categoryId, onSave, render }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // useEffect(() => {
  //   //find category;
  //   const category = window.STORE.categories.find(
  //     ({ id }) => id === categoryId
  //   );
  //   if (category) {
  //     setTitle(category.title);
  //     setDesc(category.desc);
  //   }
  // }, [categoryId]);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const onSaveHandler = () => {
    onSave();
    console.log("Save CatgoryForm");
  };

  return render
    ? render({
        titleConf: { value: title, onChange: titleChangeHandler },
        descConf: { value: desc, onChange: descChangeHandler },
        onSave: onSaveHandler,
      })
    : null;
};

CategoryFormContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onSave: PropTypes.func,
};

export default CategoryFormContainer;
