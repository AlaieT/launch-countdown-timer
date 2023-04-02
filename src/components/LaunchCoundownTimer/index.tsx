import React from "react";

import Timer from "../Timer";

import type { LaunchCountdownTimerProps } from "../../types";

import styles from "../../styles/components/launchCountdownTimer.module.scss";

const LaunchCountdownTimer = ({
  deadline,
  title,
  links,
  background: { starsImage, hillsImage },
}: LaunchCountdownTimerProps) => {
  return (
    <React.Fragment>
      {/* <div id={styles.background}>
        <img src={starsImage} alt="bg-stars" />
        <img src={hillsImage} alt="bg-hills" />
      </div> */}
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <Timer deadline={deadline} />
      </main>
      <footer>
        <ul>
          {links.map(({ name, image }) => (
            <li key={name}>
              <img src={image} width={24} height={24} alt={`icon-${name}`} />
            </li>
          ))}
        </ul>
      </footer>
    </React.Fragment>
  );
};

export default LaunchCountdownTimer;
