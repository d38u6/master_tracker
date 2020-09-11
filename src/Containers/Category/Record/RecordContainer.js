import { useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeRecord } from "Store/actions";
import { showAlert } from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

export function RecordContainer({ id, removeRecord, render }) {
  const removeRecordHandler = useCallback(() => {
    showAlert(Alerts.RecordRemoveConfirm, {
      onRemove: () => {
        removeRecord(id);
        showAlert(Alerts.RecordRemoved);
      },
    });
  }, [removeRecord, id]);

  return render({ removeRecord: removeRecordHandler });
}

RecordContainer.propTypes = {
  id: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  //redux
  removeRecord: PropTypes.func.isRequired,
};

export default connect(null, { removeRecord })(RecordContainer);
