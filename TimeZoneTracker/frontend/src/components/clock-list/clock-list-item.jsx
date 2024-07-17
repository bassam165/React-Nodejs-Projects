import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockDisplay from "../shared/clock-display";
import ClockAction from "../shared/clock-actions";
import useTimer from "../../hooks/useTimer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
    const { date } = useClock(clock.timezone, clock.offset);
    const timer = useTimer(date);

    if (!date || !timer) return null;

    return (
        <div>
            <ClockDisplay
                date={timer}
                title={clock.title}
                timezone={clock.timezone}
                offset={clock.offset}
            />
            <h3>difference {formatDistance(localClock, date)}</h3>
            <ClockAction
                clock={clock}
                updateClock={updateClock}
                deleteClock={deleteClock}
            />
        </div>
    );
};

export default ClockListItem;
