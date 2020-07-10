import React from "react";
import PropTypes from "prop-types";

import CircleButtonWrapper from "../../CategoryBox/CircleButtonWrapper/CircleButtonWrapper";
import Button from "../../../Utility/ApplyButton/ApplyButton";

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
