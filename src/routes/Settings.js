import React from "react";

import Tabs from "../components/Utility/Tabs/Tabs";
import Tab from "../components/Utility/Tabs/Tab";
import ChartsSettingsContainer from "../containers/Settings/ChartsSettingsContainer";
import ChartsSettings from "../components/Settings/ChartsSettings/ChartsSettings";
import GoalsSettingsContainer from "../containers/Settings/GoalsSettingsContainer";
import GoalsSettings from "../components/Settings/GoalsSettings/GoalsSettings";

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
      </Tabs>
    </>
  );
}

export default Settings;
