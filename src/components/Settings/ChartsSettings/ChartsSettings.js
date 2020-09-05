import React from "react";
import PropTypes from "prop-types";

import SettingsHeader from "../SettingsHeader/SettingsHeader";
import { Button } from "react-bootstrap";
import SettingForm from "../SettingForm/SettingForm";
import SelectControl from "../../Utility/Controls/SelectControl/SelectControl";
import SettingsWrapper from "../SettingsWrapper/SettingsWrapper";

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
