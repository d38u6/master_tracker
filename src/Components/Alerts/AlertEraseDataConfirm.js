import React from "react";
import PropTypes from "prop-types";

import ConfirmModal from "Components/Utility/ConfirmModal/ConfirmModal";

function AlertEraseDataConfirm({ onClose, onRemove }) {
  return (
    <ConfirmModal
      title="Erase Data"
      body="All yours data like subjects, records and settings will be permanently removed. Are you sure?"
      options={[
        { caption: "Close", variant: "secondary", onClick: onClose },
        {
          caption: "Remove",
          variant: "danger",
          onClick: () => {
            onRemove();
            onClose();
          },
        },
      ]}
    />
  );
}

AlertEraseDataConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default AlertEraseDataConfirm;
