export interface LaunchCountdownTimerProps {
  title: string;
  startTime: number;
  links: {
    name: string;
    image: string;
  }[];
}

export interface TimerProps {
  startTime: number;
}

export interface DigitProps {
  start: number;
  label: string;
}
