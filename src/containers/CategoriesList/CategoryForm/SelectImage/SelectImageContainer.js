import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { loadCategoriesImage } from "../../../../data/imagesLoader";

function SelectImageContainer({ activeSrc, onSelect, render }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = loadCategoriesImage().map((image) => ({
      ...image,
      active: activeSrc === image.src,
    }));
    setImages(images);
  }, [activeSrc]);

  const imageClickHandler = (src) => {
    setImages(
      images.map((image) => ({
        ...image,
        active: image.src === src,
      }))
    );
    onSelect(src);
  };

  return render({ images, onImageClick: imageClickHandler });
}

SelectImageContainer.propTypes = {
  activeSrc: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default SelectImageContainer;
