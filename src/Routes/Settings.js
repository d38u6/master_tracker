import React from "react";

import Tabs from "Components/Utility/Tabs/Tabs";
import Tab from "Components/Utility/Tabs/Tab";

import ChartsSettingsContainer from "Containers/Settings/ChartsSettingsContainer";
import ChartsSettings from "Components/Settings/ChartsSettings/ChartsSettings";

import GoalsSettingsContainer from "Containers/Settings/GoalsSettingsContainer";
import GoalsSettings from "Components/Settings/GoalsSettings/GoalsSettings";

import DataSettingsContainer from "Containers/Settings/DataSettingsContainer";
import DataSettings from "Components/Settings/DataSettings/DataSettings";

function Settings() {
  return (
    <>
      <Tabs id="settingsTabs">
        <Tab eventKey="chartsSettings" title="Charts">
          <ChartsSettingsContainer
            render={(props) => <ChartsSettings {...props} />}
          />
        </Tab>
        <Tab eventKey="goalsSettings" title="Goals">
          <GoalsSettingsContainer
            render={(props) => <GoalsSettings {...props} />}
          />
        </Tab>
        <Tab eventKey="dataSettings" title="Data">
          <DataSettingsContainer
            render={(props) => <DataSettings {...props} />}
          />
        </Tab>
      </Tabs>
    </>
  );
}

export default Settings;
