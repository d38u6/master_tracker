import React from "react";

import Tabs from "../components/Utility/Tabs/Tabs";
import Tab from "../components/Utility/Tabs/Tab";
import ChartsSettingsContainer from "../containers/Settings/ChartsSettingsContainer";
import ChartsSettings from "../components/Settings/ChartsSettings/ChartsSettings";
import GoalsSettingsContainer from "../containers/Settings/GoalsSettingsContainer";
import GoalsSettings from "../components/Settings/GoalsSettings/GoalsSettings";
import DataSettings from "../components/Settings/DataSettings/DataSettings";
import DataSettingsContainer from "../containers/Settings/DataSettingsContainer";

function Settings() {
  return (
    <>
      <Tabs id="settingsTabs" defaultActiveKey="dataSettings">
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
