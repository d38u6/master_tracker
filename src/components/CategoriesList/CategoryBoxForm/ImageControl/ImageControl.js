import React from "react";
import PropTypes from "prop-types";

import SelectImageContainer from "../../../../containers/CategoriesList/CategoryForm/SelectImage/SelectImageContainer";
import SelectImage from "../../../Utility/SelectImage/SelectImage";

import classes from "./ImageControl.module.css";

function ImageControl({ activeSrc, onSelect, className }) {
  return (
    <div className={[classes.ImageControl, className].join(" ")}>
      <SelectImageContainer
        activeSrc={activeSrc}
        onSelect={onSelect}
        render={(props) => <SelectImage {...props} />}
      />
    </div>
  );
}

ImageControl.propTypes = {
  activeSrc: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ImageControl;
