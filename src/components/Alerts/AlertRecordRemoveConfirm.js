import React from "react";
import PropTypes from "prop-types";

import ConfirmModal from "../Utility/ConfirmModal/ConfirmModal";

function AlertRecordRemoveConfirm({ onClose, onRemove }) {
  return (
    <ConfirmModal
      title="Remove Record"
      body="This record will be permanently removed. Are you sure?"
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

AlertRecordRemoveConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default AlertRecordRemoveConfirm;
