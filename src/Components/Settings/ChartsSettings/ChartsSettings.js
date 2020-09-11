import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import SettingsHeader from "Components/Settings/SettingsHeader/SettingsHeader";
import SettingForm from "Components/Settings/SettingForm/SettingForm";
import SettingsWrapper from "Components/Settings/SettingsWrapper/SettingsWrapper";
import SelectControl from "Components/Utility/Controls/SelectControl/SelectControl";

function ChartsSettings({ goalChart, timeChart, saveChanges }) {
  return (
    <SettingsWrapper>
      <SettingsHeader title="Charts Settings" />

      <SettingForm id="DefaultGoalChartType" label="Default Goal Chart Type:">
        <SelectControl
          value={goalChart.value}
          options={goalChart.options}
          onChange={goalChart.onChange}
        />
      </SettingForm>

      <SettingForm id="DefaultTimeChartType" label="Default Time Chart Type:">
        <SelectControl
          value={timeChart.value}
          options={timeChart.options}
          onChange={timeChart.onChange}
        />
      </SettingForm>

      <Button variant="primary" onClick={saveChanges}>
        Save Changes
      </Button>
    </SettingsWrapper>
  );
}

ChartsSettings.propTypes = {
  goalChart: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
      })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
  timeChart: PropTypes.shape({
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
      })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
};

export default ChartsSettings;
