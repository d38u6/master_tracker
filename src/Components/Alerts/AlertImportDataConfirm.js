import React from "react";
import PropTypes from "prop-types";

import ConfirmModal from "Components/Utility/ConfirmModal/ConfirmModal";

function AlertImportDataConfirm({ onClose, onImport }) {
  return (
    <ConfirmModal
      title="Import Data"
      body="All yours data will be replaced with the imported data. Are You sure?."
      options={[
        { caption: "Close", variant: "secondary", onClick: onClose },
        {
          caption: "Import",
          variant: "danger",
          onClick: () => {
            onImport();
            onClose();
          },
        },
      ]}
    />
  );
}

AlertImportDataConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired,
};

export default AlertImportDataConfirm;
