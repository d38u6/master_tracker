import React from "react";
import { shallow } from "enzyme";

import { CardWithTheme } from "Components/Utility/WithTheme/CardWithTheme/CardWithTheme";
import { theme } from "Data/fixtures";

const props = { theme };

describe("'CardWithTheme' component", () => {
  const cardWithTheme = shallow(<CardWithTheme {...props} />);

  //Card
  it("render 'Card' component", () => {
    expect(cardWithTheme.find("Card").exists()).toBe(true);
  });

  it("'Card' should contain proper 'bg' prop", () => {
    expect(cardWithTheme.find("Card").prop("bg")).toBe(props.theme.bg);
  });

  it("'Card' should contain proper 'text' prop", () => {
    expect(cardWithTheme.find("Card").prop("text")).toBe(props.theme.text);
  });
});
