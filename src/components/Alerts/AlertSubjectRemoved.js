import React from "react";
import PropTypes from "prop-types";
import Alert from "../Utility/Alert/Alert";

function AlertSubjectRemoved({ onClose }) {
  return (
    <Alert variant="primary" onClose={onClose}>
      <span>Subject Removed</span>
    </Alert>
  );
}

AlertSubjectRemoved.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertSubjectRemoved;
