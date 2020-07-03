import { useState } from "react";
import PropTypes from "prop-types";

const CategoryFormContainer = ({ render }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descChangeHandler = (e) => {
    setDesc(e.target.value);
  };

  const onSaveHandler = () => {
    console.log("Save CatgoryBoxForm");
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
  render: PropTypes.func.isRequired,
};

export default CategoryFormContainer;
