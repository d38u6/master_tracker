import React from "react";
import PropTypes from "prop-types";

import ConfirmModal from "../Utility/ConfirmModal/ConfirmModal";

function AlertSubjectRemoveConfirm({
  onClose,
  onRemove,
  onRemoveWithoutRecords,
}) {
  return (
    <ConfirmModal
      title="Remove Subject"
      body="Removing subject it is not reversible, also you can removed subject and not removing records then records move to 'General' subject"
      options={[
        { caption: "Close", variant: "secondary", onClick: onClose },
        {
          caption: "Remove but save records",
          variant: "danger",
          onClick: () => {
            onRemoveWithoutRecords();
            onClose();
          },
        },
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

AlertSubjectRemoveConfirm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRemoveWithoutRecords: PropTypes.func.isRequired,
};

export default AlertSubjectRemoveConfirm;
