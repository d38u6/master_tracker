import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  setSettings,
  setCategories,
  setRecords,
  setSubjects,
} from "Store/actions";
import { saveDataToFile, readJsonFile } from "Utility/fileManger";
import defaultSettings from "Data/defaultSettings";
import { showAlert } from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";

export const BACKUP_STAMP = "MASTER_TRACKER_BUCKUP_STAMP";

export function isValidBackup(data) {
  return data?.stamp === BACKUP_STAMP;
}

export function DataSettingsContainer({
  data,
  setSettings,
  setCategories,
  setRecords,
  setSubjects,
  render,
}) {
  const handlerExportData = () => {
    const backupData = {
      version: 0.1,
      stamp: BACKUP_STAMP,
      data,
    };

    saveDataToFile(
      JSON.stringify(backupData),
      `master-tracker-databackup-${new Date(Date.now()).toLocaleString()}.json`
    );
    showAlert(Alerts.ExportSuccess);
  };

  const handlerSetData = ({ categories, subjects, records, settings }) => {
    setCategories(categories || []);
    setSubjects(subjects || []);
    setRecords(records || []);
    const validSettings = {
      goals: settings?.goals || defaultSettings.goals,
      defaultGoalChartType:
        settings?.defaultGoalChartType || defaultSettings.defaultGoalChartType,
      defaultTimeChartType:
        settings?.defaultTimeChartType || defaultSettings.defaultTimeChartType,
    };
    setSettings(validSettings);
    showAlert(Alerts.ImportSuccess);
  };

  const handlerImportData = async (e) => {
    const file = await readJsonFile(e.target.files[0]);
    if (isValidBackup(file)) {
      showAlert(Alerts.ImportDataConfirm, {
        onImport: () => {
          handlerSetData(file.data);
        },
      });
    } else {
      showAlert(Alerts.WrongFile);
    }
  };

  const handlerEraseData = () => {
    showAlert(Alerts.EarseDataConfirm, {
      onRemove: () => {
        setSettings(defaultSettings);
        setCategories([]);
        setSubjects([]);
        setRecords([]);
        showAlert(Alerts.EarseSuccess);
      },
    });
  };

  return render({
    exportData: handlerExportData,
    importData: handlerImportData,
    eraseData: handlerEraseData,
  });
}

DataSettingsContainer.propTypes = {
  render: PropTypes.func.isRequired,
  //redux
  data: PropTypes.object.isRequired,
  setSettings: PropTypes.func.isRequired,
  setCategories: PropTypes.func.isRequired,
  setSubjects: PropTypes.func.isRequired,
  setRecords: PropTypes.func.isRequired,
};

function mapStateToProps({ app, ...data }) {
  return { data };
}

export default connect(mapStateToProps, {
  setSettings,
  setCategories,
  setSubjects,
  setRecords,
})(DataSettingsContainer);
