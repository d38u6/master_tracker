import React from "react";
import { shallow } from "enzyme";

import { RecordContainer } from "../RecordContainer";

const props = { removeRecord: jest.fn(), render: jest.fn() };

describe("'RecordContainer' component", () => {
  shallow(<RecordContainer {...props} />);

  it("should call render fn, with 'removeRecord' fn", () => {
    expect(props.render).toHaveBeenCalledWith({
      removeRecord: props.removeRecord,
    });
  });
});
