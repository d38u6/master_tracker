import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SelectImageContainer from "Containers/CategoriesList/CategoryForm/SelectImage/SelectImageContainer";
import SelectImage from "Components/Utility/SelectImage/SelectImage";

import classes from "./ImageControl.module.css";

function ImageControl({ activeSrc, onSelect, className }) {
  return (
    <div className={classNames(classes.ImageControl, className)}>
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
