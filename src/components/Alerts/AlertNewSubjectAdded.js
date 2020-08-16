import React from "react";
import PropTypes from "prop-types";
import Alert from "../Utility/Alert/Alert";

function AlertNewSubjectAdded({ onClose }) {
  return (
    <Alert variant="success" onClose={onClose}>
      <span>New Subject Added</span>
    </Alert>
  );
}

AlertNewSubjectAdded.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertNewSubjectAdded;
