import { useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);

/**
 * @param {object | undefined} [props = {
 *   startTime: Date.now(),
 *   duration: 10,
 *   unit: "minute",
 * }] The props object.
 * @param {number} [props.startTime] The start time of the appointment.
 * @param {number} [props.duration] The duration of the appointment.
 * @param {dayjs.QUnitType} [props.unit] The unit of time.
 *
 * @returns {object} {remainingTime, unit}
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
  unit = "minute",
} = {}) => {
  const now = dayjs();
  const endTime = dayjs(startTime).add(duration, unit);
  const diff = endTime.diff(now, unit);
  return {
    isRemaining: diff > 0,
    remainingTime: diff,
    unit,
  };
};

/**
 * @param {object | undefined} [props = {
 *  startTime: Date.now(),
 *  duration: 10,
 *  interval: 60000,
 *  unit: "minute",
 *  enabled: true,
 *  enableOnStartTime: true,
 * }] The props object.
 * @param {number} [props.startTime] The start time of the appointment.
 * @param {number} [props.duration] The duration of the appointment.
 * @param {number} [props.interval] The interval in milliseconds
 * @param {dayjs.QUnitType} [props.unit] The unit of time.
 * @param {boolean} [props.enabled] Whether the countdown is enabled.
 * @param {boolean} [props.enableOnStartTime] Whether the countdown is enabled on the start time.
 * @param {({
 *   remainingTime: number,
 *   unit: string,
 *   isRemaining: boolean,
 *   isEnabled: boolean,
 *   startTime: number,
 *   duration: number,
 *   interval: number
 * })=>string} [props.setCustomMessage] Set custom message method.
 *
 *
 * @returns {object} {remainingTime, unit}
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
  unit = "minute",
  enabled = true,
  enableOnStartTime = true,
  setCustomMessage,
} = {}) => {
  const [remaining, setRemaining] = useState(
    calculateRemainingTime({
      startTime,
      duration,
      unit,
    }),
  );

  const timerRef = useRef(null);

  const isEnabled = useMemo(() => {
    return (
      (enableOnStartTime
        ? dayjs().isSameOrAfter(dayjs(startTime)) && enabled
        : enabled) && remaining.isRemaining
    );
  }, [enableOnStartTime, enabled, remaining.isRemaining, startTime]);

  useEffect(() => {
    console.log(
      "isEnabled",
      isEnabled,
      timerRef.current,
      remaining.isRemaining,
    );
    if (!remaining.isRemaining && timerRef.current) {
      clearInterval(timerRef.current);
    } else if (isEnabled) {
      timerRef.current = setInterval(() => {
        setRemaining(
          calculateRemainingTime({
            startTime,
            duration,
            unit,
          }),
        );
      }, interval);
    }

    return () => clearInterval(timerRef.current);
  }, [startTime, duration, interval, unit, remaining.isRemaining, isEnabled]);

  const message = useMemo(() => {
    const { isRemaining, remainingTime, unit } = remaining;
    if (setCustomMessage) {
      return setCustomMessage({
        remainingTime,
        unit,
        isRemaining,
        isEnabled,
        startTime,
        duration,
        interval,
      });
    } else if (isRemaining) {
      return `${remainingTime} ${unit}${remainingTime > 1 ? "s" : ""} remaining`;
    } else {
      return "Time is up!";
    }
  }, [duration, interval, isEnabled, remaining, setCustomMessage, startTime]);

  return { isEnabled, message, ...remaining };
};

export default useRemainingTime;
