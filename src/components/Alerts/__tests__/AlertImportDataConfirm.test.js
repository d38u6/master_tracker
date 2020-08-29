import React from "react";
import { shallow } from "enzyme";

import AlertImportDataConfirm from "../AlertImportDataConfirm";

const props = { onClose: jest.fn(), onImport: jest.fn() };

describe("'AlertImportDataConfirm' component", () => {
  const wrapper = shallow(<AlertImportDataConfirm {...props} />);

  it("render 'ConfirmModal' component", () => {
    expect(wrapper.find("ConfirmModal").exists()).toBe(true);
  });

  it("'ConfirmModal' component should contain proper 'title' and 'body' props", () => {
    const desiredProps = {
      title: "Import Data",
      body:
        "All yours data will be replaced with the imported data. Are You sure?.",
    };
    expect(wrapper.find("ConfirmModal").props()).toMatchObject(desiredProps);
  });

  it("'ConfirmModal' component should contain propre 'options' prop", () => {
    expect(wrapper.find("ConfirmModal").prop("options")).toMatchObject([
      { caption: "Close", variant: "secondary", onClick: props.onClose },
      {
        caption: "Import",
        variant: "danger",
      },
    ]);
  });

  describe("when call 'onClick' fn belong to 'Import' option", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      wrapper.find("ConfirmModal").prop("options")[1].onClick();
    });

    it("should call 'onClose' callback", () => {
      expect(props.onClose).toHaveBeenCalled();
    });

    it("should call 'onImport' callback", () => {
      expect(props.onImport).toHaveBeenCalled();
    });
  });
});
