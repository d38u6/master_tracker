import React from "react";
import PropTypes from "prop-types";
import Alert from "Components/Utility/Alert/Alert";

function AlertExportSuccess({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>Data Exported Successfully</span>
    </Alert>
  );
}

AlertExportSuccess.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertExportSuccess;
