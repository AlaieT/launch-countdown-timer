import React from "react";
import { render } from "@testing-library/react";

import LaunchCountdownTimer from "..";

describe("LaunchCountdownTimer testing...", () => {
  const props = {
    title: "WE'RE LAUNCHING SOON",
    deadline: "April 30, 2023",
    links: {
      facbook: "",
      pinterest: "",
      instagram: ""
    },
    background: {
      starsImage: "/",
      hillsImage: "/"
    }
  };

  it("Snapshot testing", () => {
    const { asFragment } = render(
      <LaunchCountdownTimer
        background={props.background}
        deadline={props.deadline}
        title={props.title}
        links={props.links}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
