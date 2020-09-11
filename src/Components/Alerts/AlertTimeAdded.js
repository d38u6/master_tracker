import React from "react";
import PropTypes from "prop-types";
import Alert from "Components/Utility/Alert/Alert";

function AlertTimeAdded({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>Time Added</span>
    </Alert>
  );
}

AlertTimeAdded.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertTimeAdded;
