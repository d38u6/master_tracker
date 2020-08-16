import React from "react";
import PropTypes from "prop-types";
import Alert from "../Utility/Alert/Alert";

function AlertChangesSaved({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>Changes Saved</span>
    </Alert>
  );
}

AlertChangesSaved.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertChangesSaved;
