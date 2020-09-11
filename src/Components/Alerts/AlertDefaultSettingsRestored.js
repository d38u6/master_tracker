import React from "react";
import PropTypes from "prop-types";
import Alert from "Components/Utility/Alert/Alert";

function AlertDefaultSettingsRestored({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>Default Settings Restored Successful</span>
    </Alert>
  );
}

AlertDefaultSettingsRestored.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertDefaultSettingsRestored;
