import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSettings } from "Store/actions";
import defaultSettings from "Data/defaultSettings";
import { showAlert } from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

export function RestoreDefaultSettingsContainer({ setSettings, render }) {
  const history = useHistory();
  const handlerRestore = () => {
    showAlert(Alerts.RestoreDefaultSettingsConfirm, {
      onRestore: () => {
        setSettings(defaultSettings);
        history.go(0);
        showAlert(Alerts.DefaultSettingsRestored);
      },
    });
  };

  return render({ restore: handlerRestore });
}

RestoreDefaultSettingsContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  setSettings: PropTypes.func.isRequired,
};

export default connect(null, { setSettings })(RestoreDefaultSettingsContainer);
