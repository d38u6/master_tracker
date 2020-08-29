import React from "react";
import PropTypes from "prop-types";
import Alert from "../Utility/Alert/Alert";

function AlertWrongFile({ onClose }) {
  return (
    <Alert variant="danger" onClose={onClose}>
      <span>You chose wrong file, choose correct file and try again</span>
    </Alert>
  );
}

AlertWrongFile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertWrongFile;
