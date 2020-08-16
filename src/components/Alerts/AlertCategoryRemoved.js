import React from "react";
import PropTypes from "prop-types";
import Alert from "../Utility/Alert/Alert";

function AlertCategoryRemoved({ onClose }) {
  return (
    <Alert variant="primary" onClose={onClose}>
      <span>Category Removed</span>
    </Alert>
  );
}

AlertCategoryRemoved.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AlertCategoryRemoved;
