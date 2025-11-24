import { useImperativeHandle } from "react";
import { useStopwatch } from "react-timer-hook";

export default function Timer({ ref }) {
  const stopWatch = useStopwatch({ autoStart: true, interval: 50 });

  useImperativeHandle(ref, () => ({
    pause: () => stopWatch.pause(),
    reset: () => stopWatch.reset(),
  }));

  return (
    <div>
      Timer: {stopWatch.seconds}.
      {String(stopWatch.milliseconds).padStart(3, "0")}
    </div>
  );
}
