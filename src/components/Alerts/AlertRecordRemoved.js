import React from "react";
import PropTypes from "prop-types";
import Alert from "../Utility/Alert/Alert";

function AlertRecordRemoved({ onClose }) {
  return (
    <Alert variant="primary" onClose={onClose}>
      <span>Record Removed</span>
    </Alert>
  );
}

AlertRecordRemoved.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertRecordRemoved;
