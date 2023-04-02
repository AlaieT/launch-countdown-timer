import React, { useEffect, useState } from "react";

import Digit from "../Digit";

import type { TimerProps } from "../../types";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = ({ deadline }: TimerProps) => {
  const [time, setTime] = useState(Date.parse(deadline) - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(Date.parse(deadline) - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <Digit label="days" digit={Math.floor(time / DAY)}></Digit>
      <Digit label="hours" digit={Math.floor((time / HOUR) % 24)}></Digit>
      <Digit label="minuts" digit={Math.floor((time / MINUTE) % 60)}></Digit>
      <Digit label="seconds" digit={Math.floor((time / SECOND) % 60)}></Digit>
    </React.Fragment>
  );
};

export default Timer;