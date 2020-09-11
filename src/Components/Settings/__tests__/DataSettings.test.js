import React from "react";
import { shallow } from "enzyme";

import DataSettings from "Components/Settings/DataSettings/DataSettings";

const props = {
  exportData: jest.fn(),
  importData: jest.fn(),
  eraseData: jest.fn(),
};

describe("'DataSettings' component", () => {
  const dataSettings = shallow(<DataSettings {...props} />);

  //SettingsWrapper
  it("render 'SettingsWrapper' component", () => {
    expect(dataSettings.find("SettingsWrapper").exists()).toBe(true);
  });

  //SettingsHeader
  it("render 'SettingsHeader' component", () => {
    expect(dataSettings.find("SettingsHeader").exists()).toBe(true);
  });
  it("'SettingsHeader' component should contain 'Data Settings' title prop", () => {
    expect(dataSettings.find("SettingsHeader").prop("title")).toBe(
      "Data Settings"
    );
  });

  //SettingForms
  it("render three 'SettingForm' components", () => {
    expect(dataSettings.find("SettingForm").length).toBe(3);
  });

  describe("SettingForm for Export Data", () => {
    const settingForm = dataSettings.find("SettingForm").at(0);

    it("SettingForm for should contain proper props", () => {
      const desiredProps = {
        id: "exportData",
        label: "Export Your Data to File:",
      };
      expect(settingForm.props()).toMatchObject(desiredProps);
    });

    it("render 'Button' component", () => {
      expect(settingForm.find("Button").exists()).toBe(true);
    });

    it("'Button' component should contain proper props", () => {
      const desiredProps = {
        variant: "outline-primary",
        className: "Button",
      };

      expect(settingForm.find("Button").props()).toMatchObject(desiredProps);
    });

    it("should call 'exportData' callback", () => {
      settingForm.find("Button").simulate("click");
      expect(props.exportData).toHaveBeenCalled();
    });

    it("'Button' component should contain 'Export' text", () => {
      expect(settingForm.find("Button").text()).toMatch("Export");
    });

    it("render 'FaFileExport' icon component", () => {
      expect(settingForm.find("Button > FaFileExport").exists()).toBe(true);
    });
  });

  describe("SettingForm for Import Data", () => {
    const settingForm = dataSettings.find("SettingForm").at(1);

    it("SettingForm for should contain proper props", () => {
      const desiredProps = {
        id: "importData",
        label: "Import Your Data from File:",
      };
      expect(settingForm.props()).toMatchObject(desiredProps);
    });

    it("render 'FileButton' component", () => {
      expect(settingForm.find("FileButton").exists()).toBe(true);
    });

    it("'FileButton' component should contain proper props", () => {
      const desiredProps = {
        variant: "outline-primary",
        className: "Button",
      };

      expect(settingForm.find("FileButton").props()).toMatchObject(
        desiredProps
      );
    });

    it("should call 'importData' callback", () => {
      settingForm.find("FileButton").simulate("change");
      expect(props.importData).toHaveBeenCalled();
    });

    it("'FileButton' component should contain 'Import' text", () => {
      expect(settingForm.find("FileButton > span").text()).toMatch("Import");
    });

    it("render 'FaFileImport' icon component", () => {
      expect(settingForm.find("FileButton > FaFileImport").exists()).toBe(true);
    });
  });

  describe("SettingForm for Erase Data", () => {
    const settingForm = dataSettings.find("SettingForm").at(2);

    it("SettingForm for should contain proper props", () => {
      const desiredProps = {
        id: "eraseData",
        label: "Erase Your Data:",
      };
      expect(settingForm.props()).toMatchObject(desiredProps);
    });

    it("render 'Button' component", () => {
      expect(settingForm.find("Button").exists()).toBe(true);
    });

    it("'Button' component should contain proper props", () => {
      const desiredProps = {
        variant: "outline-primary",
        className: "Button",
      };

      expect(settingForm.find("Button").props()).toMatchObject(desiredProps);
    });

    it("should call 'eraseData' callback", () => {
      settingForm.find("Button").simulate("click");
      expect(props.eraseData).toHaveBeenCalled();
    });

    it("'Button' component should contain 'Erase' text", () => {
      expect(settingForm.find("Button").text()).toMatch("Erase");
    });

    it("render 'FaEraser' icon component", () => {
      expect(settingForm.find("Button > FaEraser").exists()).toBe(true);
    });
  });
});
