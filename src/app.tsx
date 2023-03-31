import React, { useEffect, useState } from "react";

import LaunchCountdownTimer from "./components/LaunchCoundownTimer";

import type { LaunchCountdownTimerProps } from "./types";

import IconFacebook from "../../assets/images/icon-facebook.svg";
import IconPinterest from "../../assets/images/icon-pinterest.svg";
import IconInstagram from "../../assets/images/icon-instagram.svg";

import "./styles/global.scss";

const pageProps: LaunchCountdownTimerProps = {
  title: "WE'RE LAUNCHING SOON",
  startTime: Date.now(),
  links: [
    {
      name: "facebook",
      image: IconFacebook,
    },
    {
      name: "pintereset",
      image: IconPinterest,
    },
    {
      name: "instagra,",
      image: IconInstagram,
    },
  ],
};

const App = () => {
  const [pageData, setPageData] = useState<null | LaunchCountdownTimerProps>(
    null
  );

  useEffect(() => {
    const getPageData = async () => {
      const result = await new Promise<LaunchCountdownTimerProps>(
        (resolve, _) => setTimeout(() => resolve(pageProps), 100)
      );

      setPageData(result);
    };

    getPageData();

    return () => undefined;
  }, []);

  return <>{pageData && <LaunchCountdownTimer {...pageData} />}</>;
};

export default App;
