import React from "react";

import type { LaunchCountdownTimerProps } from "../../types";

import "../../styles/components/launchCountdownTimer.module.scss";

const LaunchCountdownTimer = ({
  title,
  links,
  startTime,
}: LaunchCountdownTimerProps) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main></main>
      <footer>
        <ul>
          {links.map(({ name, image }) => (
            <li key={name}>
              <img src={image} width={24} height={24} alt={`icon-${name}`} />
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default LaunchCountdownTimer;
