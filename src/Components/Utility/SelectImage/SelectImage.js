import React, { useState } from "react";
import PropTypes from "prop-types";
import ImageButton from "Components/Utility/Buttons/ImageButton/ImageButton";

import ImagesModal from "./ImagesModal/ImagesModal";
import ImageBox from "./ImageBox/ImageBox";

function SelectImage({ images, onImageClick }) {
  const [modalShow, setModalShow] = useState(false);

  const showModal = () => setModalShow(true);
  const hideModal = () => setModalShow(false);

  return (
    <>
      <ImageButton onClick={showModal} />
      <ImagesModal show={modalShow} onHide={hideModal}>
        {images.map(({ src, active }) => (
          <ImageBox
            key={src}
            src={src}
            active={active}
            onClick={() => onImageClick(src)}
          />
        ))}
      </ImagesModal>
    </>
  );
}

SelectImage.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func,
};

export default SelectImage;
