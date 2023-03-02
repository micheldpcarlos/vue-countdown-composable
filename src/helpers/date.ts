import {
  msToDays,
  msToHours,
  msToMinutes,
  msToSeconds,
  msToWeeks,
} from "./common";

const getMilisecondsDiff = (startDate: Date, endDate: Date) => {
  return Math.abs(endDate.getTime() - startDate.getTime());
};

const getSecondsDiff = (startDate: Date, endDate: Date) =>
  msToSeconds(getMilisecondsDiff(startDate, endDate));

const getMinutesDiff = (startDate: Date, endDate: Date) =>
  msToMinutes(getMilisecondsDiff(startDate, endDate));

const getHoursDiff = (startDate: Date, endDate: Date) =>
  msToHours(getMilisecondsDiff(startDate, endDate));

const getDaysDiff = (startDate: Date, endDate: Date) =>
  msToDays(getMilisecondsDiff(startDate, endDate));

const getWeeksDiff = (startDate: Date, endDate: Date) =>
  msToWeeks(getMilisecondsDiff(startDate, endDate));

const getMonthsDiff = (startDate: Date, endDate: Date) => {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
};

const getYearsDiff = (startDate: Date, endDate: Date) => {
  return Math.abs(startDate.getFullYear() - endDate.getFullYear());
};

export {
  getMilisecondsDiff,
  getSecondsDiff,
  getMinutesDiff,
  getHoursDiff,
  getDaysDiff,
  getWeeksDiff,
  getMonthsDiff,
  getYearsDiff,
};
