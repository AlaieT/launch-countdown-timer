import React, { useEffect, useState } from "react";

import LaunchCountdownTimer from "./components/LaunchCoundownTimer";

import type { LaunchCountdownTimerProps } from "./types";

import "./styles/global.scss";

function App() {
  const [pageData, setPageData] = useState<null | LaunchCountdownTimerProps>(
    null
  );

  useEffect(() => {
    const getPageData = async () => {
      fetch("/data.json", {
        method: "GET",
        mode: "same-origin"
      })
        .then((response) => response.json())
        .then((data) => setPageData(data));
    };

    getPageData();

    return () => undefined;
  }, []);

  return pageData ? (
    <LaunchCountdownTimer
      background={pageData.background}
      deadline={pageData.deadline}
      links={pageData.links}
      title={pageData.title}
    />
  ) : null;
}

export default App;
