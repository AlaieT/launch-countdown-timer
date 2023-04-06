import React from "react";

import Timer from "../Timer";

import type { LaunchCountdownTimerProps } from "../../types";

import { ReactComponent as IconFacebook } from "../../images/icon-facebook.svg";
import { ReactComponent as IconPinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../images/icon-instagram.svg";

import styles from "../../styles/components/launchCountdownTimer.module.scss";

function LaunchCountdownTimer({
  deadline,
  title,
  links,
  background: { starsImage, hillsImage }
}: LaunchCountdownTimerProps) {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <Timer deadline={deadline} />
      </main>
      <footer>
        <ul>
          <li>
            <a href={links.facbook} target="_blank" rel="noreferrer">
              <IconFacebook />
            </a>
          </li>
          <li>
            <a href={links.pinterest} target="_blank" rel="noreferrer">
              <IconPinterest />
            </a>
          </li>
          <li>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              <IconInstagram />
            </a>
          </li>
        </ul>
      </footer>
      <div id={styles.background}>
        <img src={starsImage} alt="bg-stars" />
        <img src={hillsImage} alt="bg-hills" />
      </div>
    </>
  );
}

export default LaunchCountdownTimer;
