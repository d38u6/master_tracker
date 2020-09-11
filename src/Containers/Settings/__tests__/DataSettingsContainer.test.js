import React from "react";
import { shallow } from "enzyme";

import {
  DataSettingsContainer,
  BACKUP_STAMP,
} from "Containers/Settings/DataSettingsContainer";
import settings from "Data/defaultSettings";
import { categories, subjects, records } from "Data/fixtures";
import * as alert from "Components/Utility/Alert/showAlert";
import Alerts from "Components/Alerts";
import * as file from "Utility/fileManger";

const props = {
  data: { settings, categories, subjects, records },
  setSettings: jest.fn(),
  setCategories: jest.fn(),
  setRecords: jest.fn(),
  setSubjects: jest.fn(),
  render: jest.fn(),
};

alert.showAlert = jest.fn();
file.saveDataToFile = jest.fn();
file.readJsonFile = jest.fn((file) => {
  switch (file) {
    case "validFile.json":
      return { stamp: BACKUP_STAMP, data: props.data };
    case "validNoDataFile.json":
      return { stamp: BACKUP_STAMP, data: {} };
    case "notValidFile.json":
      return {};
  }
});

describe("'DataSettingsContainer' component", () => {
  describe("render fn", () => {
    let properties;
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<DataSettingsContainer {...props} />);
      properties = [...props.render.mock.calls].pop()[0];
    });

    it("should call render fn with 'exportData' function", () => {
      expect(typeof properties.exportData).toBe("function");
    });
    it("should call render fn with 'importData' function", () => {
      expect(typeof properties.importData).toBe("function");
    });
    it("should call render fn with 'eraseData' function", () => {
      expect(typeof properties.eraseData).toBe("function");
    });
  });

  describe("when call 'exportData' function", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<DataSettingsContainer {...props} />);
      [...props.render.mock.calls].pop()[0].exportData();
    });

    describe("'saveDataToFile' function", () => {
      let properties;
      beforeEach(() => {
        properties = JSON.parse([...file.saveDataToFile.mock.calls].pop()[0]);
      });

      it("should call 'saveDataToFile' function with backup stamp", () => {
        expect(properties.stamp).toBe(BACKUP_STAMP);
      });
      it("should call 'saveDataToFile' function with proper data", () => {
        expect(properties.data).toStrictEqual(props.data);
      });
    });
    it("should call 'showAlert' function with 'ExportSuccess' alert", () => {
      expect(alert.showAlert).toHaveBeenCalledWith(Alerts.ExportSuccess);
    });
  });

  describe("when call 'importData' function", () => {
    describe("and when file is valid", () => {
      const validFile = "validFile.json";
      beforeEach(() => {
        jest.clearAllMocks();
        shallow(<DataSettingsContainer {...props} />);
        [...props.render.mock.calls]
          .pop()[0]
          .importData({ target: { files: [validFile] } });
      });
      it("should call 'readJsonFile' with 'validFile'", () => {
        expect(file.readJsonFile).toHaveBeenCalledWith(validFile);
      });
      it("should call 'showAlert' function with 'ImportDataConfirm' alert", () => {
        const [arg0] = alert.showAlert.mock.calls[0];
        expect(arg0).toBe(Alerts.ImportDataConfirm);
      });
      it("should call 'showAlert' function with 'onImport' function", () => {
        const [, { onImport }] = alert.showAlert.mock.calls[0];
        expect(typeof onImport).toBe("function");
      });
      describe("and when call 'onImport function'", () => {
        beforeEach(() => {
          const [, { onImport }] = alert.showAlert.mock.calls[0];
          jest.clearAllMocks();
          onImport();
        });

        it("should call 'setCategories' callback with categories", () => {
          expect(props.setCategories).toHaveBeenCalledWith(
            props.data.categories
          );
        });
        it("should call 'setSubjects' callback with subjects", () => {
          expect(props.setSubjects).toHaveBeenCalledWith(props.data.subjects);
        });
        it("should call 'setRecords' callback with records", () => {
          expect(props.setRecords).toHaveBeenCalledWith(props.data.records);
        });
        it("should call 'setSettings' callback with settings", () => {
          expect(props.setSettings).toHaveBeenCalledWith(props.data.settings);
        });
        it("should call 'showAlert' function with 'ImportSuccess' alert", () => {
          expect(alert.showAlert).toHaveBeenCalledWith(Alerts.ImportSuccess);
        });
      });
    });

    describe("when file is valid, but no data", () => {
      const validFile = "validNoDataFile.json";
      beforeEach(() => {
        jest.clearAllMocks();
        shallow(<DataSettingsContainer {...props} />);
        [...props.render.mock.calls]
          .pop()[0]
          .importData({ target: { files: [validFile] } });
      });
      describe("and when call 'onImport function'", () => {
        beforeEach(() => {
          const [, { onImport }] = alert.showAlert.mock.calls[0];
          jest.clearAllMocks();
          onImport();
        });

        it("should call 'setCategories' callback with empty array", () => {
          expect(props.setCategories).toHaveBeenCalledWith([]);
        });
        it("should call 'setSubjects' callback with empty array", () => {
          expect(props.setSubjects).toHaveBeenCalledWith([]);
        });
        it("should call 'setRecords' callback with empty array", () => {
          expect(props.setRecords).toHaveBeenCalledWith([]);
        });
        it("should call 'setSettings' callback with default settings", () => {
          expect(props.setSettings).toHaveBeenCalledWith(settings);
        });
        it("should call 'showAlert' function with 'ImportSuccess' alert", () => {
          expect(alert.showAlert).toHaveBeenCalledWith(Alerts.ImportSuccess);
        });
      });
    });

    describe("when file is not valid", () => {
      const validFile = "notValidFile.json";
      beforeEach(() => {
        jest.clearAllMocks();
        shallow(<DataSettingsContainer {...props} />);
        [...props.render.mock.calls]
          .pop()[0]
          .importData({ target: { files: [validFile] } });
      });
      it("should call 'showAlert' function with 'WrongFile' alert", () => {
        expect(alert.showAlert).toHaveBeenCalledWith(Alerts.WrongFile);
      });
    });
  });

  describe("when call 'eraseData'", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      shallow(<DataSettingsContainer {...props} />);
      [...props.render.mock.calls].pop()[0].eraseData();
    });
    it("should call 'showAlert' function with 'EarseDataConfirm' alert", () => {
      const [arg0] = alert.showAlert.mock.calls[0];
      expect(arg0).toBe(Alerts.EarseDataConfirm);
    });
    it("should call 'showAlert' function with 'onRemove' function", () => {
      const [, { onRemove }] = alert.showAlert.mock.calls[0];
      expect(typeof onRemove).toBe("function");
    });
    describe("and when call 'onRemove' function", () => {
      beforeEach(() => {
        const [, { onRemove }] = alert.showAlert.mock.calls[0];
        jest.clearAllMocks();
        onRemove();
      });
      it("should call 'setCategories' callback with empty array", () => {
        expect(props.setCategories).toHaveBeenCalledWith([]);
      });
      it("should call 'setSubjects' callback with empty array", () => {
        expect(props.setSubjects).toHaveBeenCalledWith([]);
      });
      it("should call 'setRecords' callback with empty array", () => {
        expect(props.setRecords).toHaveBeenCalledWith([]);
      });
      it("should call 'setSettings' callback with default settings", () => {
        expect(props.setSettings).toHaveBeenCalledWith(settings);
      });
      it("should call 'showAlert' function with 'EarseSuccess' alert", () => {
        expect(alert.showAlert).toHaveBeenCalledWith(Alerts.EarseSuccess);
      });
    });
  });
});
