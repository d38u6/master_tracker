import React from "react";
import { shallow } from "enzyme";

import AlertRestoreDefaultSettingsConfirm from "Components/Alerts/AlertRestoreDefaultSettingsConfirm";

const props = { onClose: jest.fn(), onRestore: jest.fn() };

describe("'AlertRestoreDefaultSettingsConfirm' component", () => {
  const wrapper = shallow(<AlertRestoreDefaultSettingsConfirm {...props} />);

  it("render 'ConfirmModal' component", () => {
    expect(wrapper.find("ConfirmModal").exists()).toBe(true);
  });

  it("'ConfirmModal' component should contain propre 'title' and 'body' props", () => {
    const desiredProps = {
      title: "Restore default settings",
      body: "Your settings will be restore to default. Are you sure?",
    };
    expect(wrapper.find("ConfirmModal").props()).toMatchObject(desiredProps);
  });

  it("'ConfirmModal' component should contain propre 'options' prop", () => {
    expect(wrapper.find("ConfirmModal").prop("options")).toMatchObject([
      { caption: "Close", variant: "secondary", onClick: props.onClose },
      {
        caption: "Restore",
        variant: "danger",
      },
    ]);
  });

  describe("when call 'onClick' fn belong to 'Remove' option", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      wrapper.find("ConfirmModal").prop("options")[1].onClick();
    });

    it("should call 'onClose' callback", () => {
      expect(props.onClose).toHaveBeenCalled();
    });

    it("should call 'onRestore' callback", () => {
      expect(props.onRestore).toHaveBeenCalled();
    });
  });
});
