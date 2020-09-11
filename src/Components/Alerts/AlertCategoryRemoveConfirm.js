import React from "react";
import PropTypes from "prop-types";

import ConfirmModal from "Components/Utility/ConfirmModal/ConfirmModal";

function AlertCategoryRemoveConfirm({ onClose, onRemove }) {
  return (
    <ConfirmModal
      title="Remove Category"
      body="All yours data belonging to this category, like subjects and records will be permanently removed. Are you sure?"
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

AlertCategoryRemoveConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default AlertCategoryRemoveConfirm;
