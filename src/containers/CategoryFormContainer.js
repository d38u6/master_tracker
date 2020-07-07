import { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function CategoryFormContainer({ categories, categoryId, onSave, render }) {
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
    console.log("Image Change");
  };

  const onSaveHandler = () => {
    onSave();
    console.log("Save CatgoryForm");
  };

  const onRemoveHandler = () => {
    console.log("remove category");
  };

  return render
    ? render({
        titleConf: { value: title, onChange: titleChangeHandler },
        descConf: { value: desc, onChange: descChangeHandler },
        imageConf: { src: imageSrc, onChange: onImageChangeHandler },
        onSaveClick: onSaveHandler,
        onRemoveClick: onRemoveHandler,
      })
    : null;
}

CategoryFormContainer.propTypes = {
  categoryId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  //redux
  categories: PropTypes.array,
};

function mapDispatchToProps({ categories }) {
  return { categories };
}

export default connect(mapDispatchToProps)(CategoryFormContainer);
