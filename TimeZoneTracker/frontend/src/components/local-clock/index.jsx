import ClockDisplay from "../shared/clock-display";
import ClockActions from "../shared/clock-actions";
import useClock from "../../hooks/useClock";
import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";

const index = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  const timer = useTimer(date);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}

      <ClockActions local={true} 
      clock={clock} 
      updateClock={updateClock} 
      createClock = {createClock}
      />
    </div>
  );
};

export default index;
