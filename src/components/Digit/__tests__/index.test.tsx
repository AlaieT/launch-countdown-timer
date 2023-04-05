import React from "react";
import { render } from "@testing-library/react";

import Digit from "../index";

describe("Digit testing...", () => {
  it("Snapshot testing", () => {
    const { asFragment } = render(<Digit label="day" digit={24} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
