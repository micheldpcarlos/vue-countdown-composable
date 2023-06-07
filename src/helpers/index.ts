type CountdownObject = {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
};

/**
 * Get the difference for each time in a CountdownObject
 * @param diff - time difference in milisseconds
 */
export const getDiffObjectFromMsDiff = (diff: number): CountdownObject => {
  const milliseconds = diff % 1000;
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));

  return { milliseconds, seconds, minutes, hours, days, months, years };
};

/**
 * Get the difference CountdownObject for two dates
 * @param initialDate - initial Date
 * @param futureDate - future Date
 */
export const getDateDifferenceObject = (
  initialDate: Date,
  futureDate: Date
): CountdownObject => {
  const diff = futureDate.getTime() - initialDate.getTime();

  return getDiffObjectFromMsDiff(diff);
};

/**
 * Get the diff in miliseconds between two dates
 * @param initialDate - initial Date
 * @param futureDate - future Date
 */
export const getDateDifferenceMs = (
  initialDate: Date,
  futureDate: Date
): number => {
  return futureDate.getTime() - initialDate.getTime();
};

/**
 * Check if the first date is after the second one
 * @param date1
 * @param date2
 */
export const isDateAfter = (date1: Date, date2: Date): boolean => {
  return date1.getTime() > date2.getTime();
};
