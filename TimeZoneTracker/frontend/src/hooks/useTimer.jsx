import { addSeconds } from "date-fns";
import { useEffect, useState, useRef } from "react";

const useTimer = (initialDate) => {
    const [timer, setTimer] = useState(initialDate);
    const timerIdRef = useRef(null);

    useEffect(() => {
        setTimer(initialDate);
    }, [initialDate]);

    useEffect(() => {
        if (timerIdRef.current) return; 

        timerIdRef.current = setInterval(() => {
            setTimer(prevTimer => addSeconds(prevTimer, 1));
        }, 1000);

        return () => {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        };
    }, []);

    return timer;
};

export default useTimer;
