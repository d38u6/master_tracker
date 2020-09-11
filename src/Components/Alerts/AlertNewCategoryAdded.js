import React from "react";
import PropTypes from "prop-types";
import Alert from "Components/Utility/Alert/Alert";

function AlertNewCategoryAdded({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>New category added</span>
    </Alert>
  );
}

AlertNewCategoryAdded.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertNewCategoryAdded;
