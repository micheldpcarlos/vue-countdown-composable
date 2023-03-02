const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;
const WEEK_IN_MS = 7 * DAY_IN_MS;

const msToSeconds = (miliseconds: number) =>
  Math.round(miliseconds / SECOND_IN_MS);

const msToMinutes = (miliseconds: number) => miliseconds / MINUTE_IN_MS;

const msToHours = (miliseconds: number) => miliseconds / HOUR_IN_MS;

const msToDays = (miliseconds: number) => miliseconds / DAY_IN_MS;

const msToWeeks = (miliseconds: number) => miliseconds / WEEK_IN_MS;

export { msToDays, msToHours, msToMinutes, msToSeconds, msToWeeks };
