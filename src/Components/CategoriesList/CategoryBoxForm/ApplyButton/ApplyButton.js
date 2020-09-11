import React from "react";
import PropTypes from "prop-types";

import CircleButtonWrapper from "Components/Utility/Buttons/CircleButtonWrapper/CircleButtonWrapper";
import Button from "Components/Utility/Buttons/ApplyButton/ApplyButton";

function ApplyButton({ onClick }) {
  return (
    <CircleButtonWrapper>
      <Button onClick={onClick} />
    </CircleButtonWrapper>
  );
}

ApplyButton.propTypes = {
  onClcik: PropTypes.func,
};

export default ApplyButton;
