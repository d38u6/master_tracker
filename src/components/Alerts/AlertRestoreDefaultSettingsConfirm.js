import React from "react";
import PropTypes from "prop-types";

import ConfirmModal from "../Utility/ConfirmModal/ConfirmModal";

function AlertRestoreDefaultSettingsConfirm({ onClose, onRestore }) {
  return (
    <ConfirmModal
      title="Restore default settings"
      body="Your settings will be restore to default. Are you sure?"
      options={[
        { caption: "Close", variant: "secondary", onClick: onClose },
        {
          caption: "Restore",
          variant: "danger",
          onClick: () => {
            onRestore();
            onClose();
          },
        },
      ]}
    />
  );
}

AlertRestoreDefaultSettingsConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
};

export default AlertRestoreDefaultSettingsConfirm;
