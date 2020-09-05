import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FaFileExport, FaFileImport, FaEraser } from "react-icons/fa";

import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import SettingForm from "../SettingForm/SettingForm";
import FileButton from "../../Utility/Buttons/FileButton/FileButton";
import classes from "./DataSettings.module.css";

function DataSettings({ exportData, importData, eraseData }) {
  return (
    <SettingsWrapper>
      <SettingsHeader title="Data Settings" />

      <SettingForm id="exportData" label="Export Your Data to File:">
        <Button
          variant="outline-primary"
          className={classes.Button}
          onClick={exportData}
        >
          Export <FaFileExport />
        </Button>
      </SettingForm>

      <SettingForm id="importData" label="Import Your Data from File:">
        <FileButton
          variant="outline-primary"
          className={classes.Button}
          onChange={importData}
        >
          <span>Import</span> <FaFileImport />
        </FileButton>
      </SettingForm>

      <SettingForm id="eraseData" label="Erase Your Data:">
        <Button
          variant="outline-primary"
          className={classes.Button}
          onClick={eraseData}
        >
          Erase <FaEraser />
        </Button>
      </SettingForm>
    </SettingsWrapper>
  );
}

DataSettings.propTypes = {
  exportData: PropTypes.func.isRequired,
  importData: PropTypes.func.isRequired,
  eraseData: PropTypes.func.isRequired,
};

export default DataSettings;
