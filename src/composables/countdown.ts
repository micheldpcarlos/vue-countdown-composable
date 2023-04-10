import { ref, computed } from "vue";

import {
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  intervalToDuration,
  isAfter,
} from "date-fns";

export function useDateCountdown() {
  const countdownDate = ref<Date>(new Date());
  const currentDate = ref(countdownDate.value);
  const countIntervalInMs = ref<number>(1000);
  const separatedValues = ref(false);

  const timeInterval = ref<number>(0);
  const initInterval = () => {
    // clear a possible running interval to avoid untracked duplicates
    clearInterval(timeInterval.value);
    // set interval
    timeInterval.value = setInterval(compareDates, countIntervalInMs.value);
  };

  /**
   * Compare the countDown date with the current date, updating values
   */
  const compareDates = () => {
    const nowDate = new Date();
    const diffInMs = differenceInMilliseconds(countdownDate.value, nowDate);
    if (diffInMs <= 0) {
      clearInterval(timeInterval.value);
      currentDate.value = countdownDate.value;
    } else {
      currentDate.value = nowDate;
    }
  };

  const intervalDurationObject = computed(() => {
    return intervalToDuration({
      start: currentDate.value,
      end: countdownDate.value,
    });
  });

  const remainingMiliseconds = computed(() => {
    const difference = differenceInMilliseconds(
      countdownDate.value,
      currentDate.value
    );

    return separatedValues.value ? difference : difference % 1000;
  });

  const remainingSeconds = computed(() => {
    if (!separatedValues.value)
      return intervalDurationObject.value.seconds || 0;
    return differenceInSeconds(countdownDate.value, currentDate.value);
  });

  const remainingMinutes = computed(() => {
    if (!separatedValues.value)
      return intervalDurationObject.value.minutes || 0;
    return differenceInMinutes(countdownDate.value, currentDate.value);
  });

  const remainingHours = computed(() => {
    if (!separatedValues.value) return intervalDurationObject.value.hours || 0;
    return differenceInHours(countdownDate.value, currentDate.value);
  });

  const remainingDays = computed(() => {
    if (!separatedValues.value) return intervalDurationObject.value.days || 0;
    return differenceInDays(countdownDate.value, currentDate.value);
  });

  const remainingMonths = computed(() => {
    if (!separatedValues.value) return intervalDurationObject.value.months || 0;
    return differenceInMonths(countdownDate.value, currentDate.value);
  });

  const remainingYears = computed(() => {
    if (!separatedValues.value) return intervalDurationObject.value.years || 0;
    return differenceInYears(countdownDate.value, currentDate.value);
  });

  /**
   * Pause the countdown.
   */
  const pauseCountdown = () => {
    clearInterval(timeInterval.value);
  };

  const stopCountdon = () => {
    clearInterval(timeInterval.value);
    currentDate.value = countdownDate.value;
  };

  /**
   * Resume the countdown.
   *
   * DateCountdown is aways compared with current date, on resume it will jump to current difference.
   * If you want a more controllable counter, please use the NumberCountdown
   */
  const resumeCountdown = () => {
    clearInterval(timeInterval.value);
    const currentNewDate = new Date();
    const diffInMs = differenceInMilliseconds(
      countdownDate.value,
      currentNewDate
    );

    if (diffInMs > 0) {
      currentDate.value = currentNewDate;
      initInterval();
    } else {
      // reset to zero if not positive
      // the user is resuming a countdown that ended
      currentDate.value = countdownDate.value;
    }
  };

  /**
   * Start the countdown with desired params
   *
   * @param date - Date to start countdown towards
   * @param updateInterval - Interval time in ms to check the counter - default 1000
   * @param separated - If set to true, each one of the counter will return the total remaining converted (e.g { miliseconds: 120.000 seconds: 120, minutes 2 })
   */
  const startCountdown = (
    date: Date,
    updateInterval: number = 1000,
    separated: boolean = false
  ) => {
    // Clear a possible previsous interval before starting
    // to make it possible to the user restart with different parameters
    clearInterval(timeInterval.value);

    // Check the date before starting
    const nowDate = new Date();
    if (isAfter(date, nowDate)) {
      countdownDate.value = date;
      currentDate.value = nowDate;
    } else {
      // reset to zero on error
      countdownDate.value = nowDate;
      currentDate.value = countdownDate.value;
    }

    if (typeof updateInterval !== "number" || updateInterval <= 0) {
      console.warn("Invalid countInterval parameter, using default 1000ms");
      countIntervalInMs.value = 1000;
    } else {
      countIntervalInMs.value = updateInterval;
    }

    // define if the returning values are calculated separated
    separatedValues.value = !!separated;

    initInterval();
  };

  return {
    miliseconds: remainingMiliseconds,
    seconds: remainingSeconds,
    minutes: remainingMinutes,
    hours: remainingHours,
    days: remainingDays,
    months: remainingMonths,
    years: remainingYears,
    start: startCountdown,
    pause: pauseCountdown,
    resume: resumeCountdown,
    stop: stopCountdon,
  };
}

/**
 *
 * @param countdownTime - Countdown time in miliseconds
 * @param {number} [countInterval=1000] - Interval time in ms to check the counter
 * @returns
 */
// export function useNumberCountdown() {
//   const currentCountdownTime = ref(0);
//   const countIntervalInMs = ref<number>(1000);
//   const separatedValues = ref(false);

//   // user set interval to update the returned data
//   const timeInterval = ref<number>(0);
//   const initInterval = (currentNewDate: Date) => {
//     timeInterval.value = setInterval(() => {
//       const newTime = currentCountdownTime.value - countIntervalInMs.value;
//       if (newTime <= 0) {
//         currentCountdownTime.value = 0;
//         clearInterval(timeInterval.value);
//       } else {
//         currentCountdownTime.value = newTime;
//       }
//     }, countIntervalInMs.value);
//   };

//   const remainingMiliseconds = computed(() => {
//     if (!separatedValues.value)
//       return intervalDurationObject.value.seconds || 0;
//     return differenceInSeconds(countdownDate.value, currentDate.value);
//   });

//   const remainingSeconds = computed(() => {
//     if (!separatedValues.value)
//       return intervalDurationObject.value.seconds || 0;
//     return differenceInSeconds(countdownDate.value, currentDate.value);
//   });

//   const remainingMinutes = computed(() => {
//     if (!separatedValues.value)
//       return intervalDurationObject.value.minutes || 0;
//     return differenceInMinutes(countdownDate.value, currentDate.value);
//   });

//   const remainingHours = computed(() => {
//     if (!separatedValues.value) return intervalDurationObject.value.hours || 0;
//     return differenceInHours(countdownDate.value, currentDate.value);
//   });

//   const remainingDays = computed(() => {
//     if (!separatedValues.value) return intervalDurationObject.value.days || 0;
//     return differenceInDays(countdownDate.value, currentDate.value);
//   });

//   const remainingMonths = computed(() => {
//     if (!separatedValues.value) return intervalDurationObject.value.months || 0;
//     return differenceInMonths(countdownDate.value, currentDate.value);
//   });

//   const remainingYears = computed(() => {
//     if (!separatedValues.value) return intervalDurationObject.value.years || 0;
//     return differenceInYears(countdownDate.value, currentDate.value);
//   });

//   /**
//    * Pause the countdown.
//    */
//   const pauseCountdown = () => {
//     clearInterval(timeInterval.value);
//   };

//   /**
//    * Resume the countdown.
//    *
//    * DateCountdown is aways compared with current date, on resume it will jump to current difference.
//    * If you want a more controllable counter, please use the NumberCountdown
//    */
//   const resumeCountdown = () => {
//     clearInterval(timeInterval.value);
//     const currentNewDate = new Date();
//     const diffInMs = differenceInMilliseconds(
//       countdownDate.value,
//       currentNewDate
//     );

//     if (diffInMs > 0) {
//       currentDate.value = currentNewDate;
//       initInterval();
//     } else {
//       // reset to zero if not positive
//       // the user is resuming a countdown that ended
//       currentDate.value = countdownDate.value;
//     }
//   };

//   /**
//    *
//    * @param countdownTime - Time in miliseconds to start countdown
//    * @param updateInterval - Interval time in ms to check the counter - default 1000
//    * @param separated - If set to true, each one of the counter will return the total remaining converted (e.g { seconds: 120, minutes 2 })
//    */
//   const startCountdown = (
//     countdownTime: number,
//     updateInterval: number = 1000,
//     separated: boolean = false
//   ) => {
//     // Clear a possible previsous interval before starting
//     // to make it possible to the user restart with different parameters
//     clearInterval(timeInterval.value);

//     // Check the date before starting
//     const nowDate = new Date();
//     if (countdownTime >= 0) {
//       currentCountdownTime.value = countdownTime;
//     } else {
//       // reset to zero on error
//       currentCountdownTime.value = 0;
//     }

//     if (typeof updateInterval !== "number" || updateInterval <= 0) {
//       console.warn("Invalid countInterval parameter, using default 1000ms");
//       countIntervalInMs.value = 1000;
//     } else {
//       countIntervalInMs.value = updateInterval;
//     }

//     // define if the returning values are calculated separated
//     separatedValues.value = !!separated;

//     initInterval();
//   };

//   // expose managed state as return value
//   return {
//     miliseconds: remainingMiliseconds,
//     seconds: remainingSeconds,
//     minutes: remainingMinutes,
//     hours: remainingHours,
//     days: remainingDays,
//     months: remainingMonths,
//     years: remainingYears,
//     start: startCountdown,
//     pause: pauseCountdown,
//     resume: resumeCountdown,
//   };
// }
