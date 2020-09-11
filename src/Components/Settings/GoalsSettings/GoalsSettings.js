import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import SettingsWrapper from "Components/Settings/SettingsWrapper/SettingsWrapper";
import SettingsHeader from "Components/Settings/SettingsHeader/SettingsHeader";
import SettingForm from "Components/Settings/SettingForm/SettingForm";
import HoursAndMinutesControl from "Components/Utility/Controls/HoursAndMinutesControl/HoursAndMinutesControl";

export function getLabel(goalName) {
  return `Your ${goalName[0].toUpperCase() + goalName.slice(1)} Goal:`;
}

function GoalsSettings({ goals, saveChanges }) {
  return (
    <SettingsWrapper>
      <SettingsHeader title="Goals Settings" />
      {goals.map(({ id, ...conf }) => (
        <SettingForm key={id} id={id.toUpperCase()} label={getLabel(id)}>
          <HoursAndMinutesControl {...conf} />
        </SettingForm>
      ))}
      <Button variant="primary" onClick={saveChanges}>
        Save Changes
      </Button>
    </SettingsWrapper>
  );
}

GoalsSettings.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      hoursConf: PropTypes.shape({
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
      }).isRequired,
      minConf: PropTypes.shape({
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
      }).isRequired,
    })
  ).isRequired,
  saveChanges: PropTypes.func.isRequired,
};

export default GoalsSettings;
