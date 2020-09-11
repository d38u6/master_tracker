import React from "react";
import PropTypes from "prop-types";
import Alert from "Components/Utility/Alert/Alert";

function AlertImportSuccess({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>Data Imported Successfully</span>
    </Alert>
  );
}

AlertImportSuccess.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertImportSuccess;
