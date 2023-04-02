import React, { useEffect, useState } from "react";

import type { DigitProps } from "../../types";

import styles from "../../styles/components/digit.module.scss";

const Digit = ({ label, digit }: DigitProps) => {
  const [prevDigit, setPrevDigit] = useState(digit);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (prevDigit != digit) {
      setIsAnimated((item) => (item = !item));

      const timeout = setTimeout(() => {
        setIsAnimated((item) => (item = !item));
        setPrevDigit(digit);
      }, 500);

      return () => clearTimeout(timeout);
    }

    return () => undefined;
  }, [digit]);

  return (
    <div
      className={[styles.digit, isAnimated ? styles.animated : null].join(" ")}
    >
      <div>
        <div>Real:{digit}</div>
        <div>Prev:{prevDigit}</div>
      </div>
      <label>{label}</label>
    </div>
  );
};

export default Digit;
