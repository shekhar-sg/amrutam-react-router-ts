import { useEffect, useMemo, useRef, useState } from "react";
import dayjs, { type ManipulateType } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);

export interface CalculateRemainingTimeOptions {
  startTime?: number;
  duration?: number;
  durationUnit?: ManipulateType;
}

/**
 * @description
 * This function calculates the remaining time for an appointment.
 * It takes the start time and duration of the appointment as input.
 * It returns the remaining time and the unit of time.
 * The remaining time is calculated by subtracting the current time from the start time.
 * The unit of time can be minute, hour, day, etc.
 * The remaining time is updated every second.
 * The remaining time is decremented by 1 every second.
 * */
export const calculateRemainingTime = ({
  startTime = Date.now(),
  duration = 10,
  durationUnit = "minute",
}: CalculateRemainingTimeOptions) => {
  const now = dayjs();
  const endTime = dayjs(startTime).add(duration, durationUnit);
  const diff = endTime.diff(now, durationUnit);
  return {
    isRemaining: diff > 0,
    remainingTime: diff,
    durationUnit,
  };
};

export interface UseRemainingTimeOptions {
  startTime?: number;
  duration?: number;
  interval?: number;
  durationUnit?: ManipulateType;
  enabled?: boolean;
  enableOnStartTime?: boolean;
  setCustomMessage?: (option: {
    remainingTime: number;
    durationUnit: ManipulateType;
    isRemaining: boolean;
    isEnabled: boolean;
    startTime: number;
    duration: number;
    interval: number;
  }) => string;
}

/**
 * @description
 * This hook calculates the remaining time for an appointment.
 * It takes the start time and duration of the appointment as input.
 * It returns the remaining time and the unit of time.
 * It uses the {@link calculateRemainingTime} function to calculate the remaining time.
 *
 * with **`setCustomMessage`** method, you can set a custom message.
 *
 *  @see {@link calculateRemainingTime} for more information on how the remaining time is calculated.
 *
 * @example
 * ```jsx
 * const {isEnabled, message, remainingTime, unit} = useRemainingTime({
 *  startTime: Date.now(),
 *  duration: 10,
 *  interval: 60000,
 *  unit: "minute",
 *  enabled: true,
 *  enableOnStartTime: true,
 *  setCustomMessage: ({ remainingTime, unit, isRemaining, isEnabled, startTime, duration, interval }) => {
 *    if (isRemaining) {
 *      return `${remainingTime} ${unit}${remainingTime > 1 ? "s" : ""} remaining`;
 *    } else {
 *      return "Time is up!";
 *    }
 *   },
 *  });
 *  ```
 * */
const useRemainingTime = ({
  startTime = Date.now(),
  duration = 10,
  interval = 60000,
  durationUnit = "minute",
  enabled = true,
  enableOnStartTime = true,
  setCustomMessage,
}: UseRemainingTimeOptions) => {
  const [remaining, setRemaining] = useState(
    calculateRemainingTime({
      startTime,
      duration,
      durationUnit,
    }),
  );
  const [message, setMessage] = useState("");

  const timerRef = useRef<NodeJS.Timeout>(null);

  const isEnabled = useMemo(() => {
    return enableOnStartTime
      ? dayjs().isSameOrAfter(dayjs(startTime)) && enabled
      : enabled;
  }, [enableOnStartTime, enabled, startTime]);

  useEffect(() => {
    if (!remaining.isRemaining && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else if (isEnabled) {
      console.log("startTimeDefault", startTime);
      timerRef.current = setInterval(() => {
        setRemaining(
          calculateRemainingTime({
            startTime,
            duration,
            durationUnit,
          }),
        );
      }, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [
    startTime,
    duration,
    interval,
    durationUnit,
    remaining.isRemaining,
    isEnabled,
  ]);

  useEffect(() => {
    const { isRemaining, remainingTime, durationUnit } = remaining;
    if (setCustomMessage) {
      setMessage(
        setCustomMessage({
          remainingTime,
          durationUnit,
          isRemaining,
          isEnabled,
          startTime,
          duration,
          interval,
        }),
      );
    } else if (isRemaining) {
      setMessage(
        `${remainingTime} ${durationUnit} remaining`,
      );
    } else {
      setMessage("Time is up!");
    }
  }, [duration, interval, isEnabled, remaining, setCustomMessage, startTime]);

  return { isEnabled, message, ...remaining };
};

export default useRemainingTime;
