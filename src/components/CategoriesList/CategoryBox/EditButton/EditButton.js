import React from "react";
import PropTypes from "prop-types";
import CircleButtonWrapper from "../CircleButtonWrapper/CircleButtonWrapper";
import Button from "../../../Utility/Buttons/EditButton/EditButton";

function EditButton({ className, onClick }) {
  return (
    <CircleButtonWrapper className={className || ""}>
      <Button onClick={onClick} />
    </CircleButtonWrapper>
  );
}

EditButton.propTypes = {
  className: PropTypes.string,
  onClik: PropTypes.func,
};

export default EditButton;
