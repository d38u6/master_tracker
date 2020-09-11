import React from "react";
import PropTypes from "prop-types";
import Alert from "Components/Utility/Alert/Alert";

function AlertEraseSuccess({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>Your data now is erased</span>
    </Alert>
  );
}

AlertEraseSuccess.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertEraseSuccess;
