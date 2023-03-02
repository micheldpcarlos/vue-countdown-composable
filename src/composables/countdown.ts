import { ref, computed } from "vue";
import {
  getMilisecondsDiff,
  getSecondsDiff,
  getMinutesDiff,
  getHoursDiff,
  getDaysDiff,
  getWeeksDiff,
  getMonthsDiff,
  getYearsDiff,
} from "../helpers/date";

/**
 *
 * @param date - Countdown date object
 * @param {number} [interval=1000] - Interval time in ms to check the counter
 * @returns
 */
export function useDateCountdown() {
  const countdownDate = ref<Date>(new Date());
  const currentDate = ref(countdownDate.value);
  const countIntervalInMs = ref<number>(1000);
  const roundValue = ref(true);

  const timeInterval = ref<number>(0);
  const initInterval = () => {
    // clear a possible running interval to avoid untracked duplicates
    clearInterval(timeInterval.value);
    timeInterval.value = setInterval(() => {
      const timeDifferenceInMs =
        countdownDate.value.getTime() - new Date().getTime();
      if (timeDifferenceInMs <= 0) {
        clearInterval(timeInterval.value);
        currentDate.value = countdownDate.value;
      } else {
        currentDate.value = new Date();
      }
    }, countIntervalInMs.value);
  };

  const remainingMilisseconds = computed(() =>
    getMilisecondsDiff(currentDate.value, countdownDate.value)
  );

  const remainingSeconds = computed(() => {
    const difference = getSecondsDiff(currentDate.value, countdownDate.value);
    return roundValue.value ? Math.round(difference) : difference;
  });

  const remainingMinutes = computed(() => {
    const difference = getMinutesDiff(currentDate.value, countdownDate.value);
    return roundValue.value ? Math.round(difference) : difference;
  });

  const remainingHours = computed(() => {
    const difference = getHoursDiff(currentDate.value, countdownDate.value);
    return roundValue.value ? Math.round(difference) : difference;
  });

  const remainingDays = computed(() => {
    const difference = getDaysDiff(currentDate.value, countdownDate.value);
    return roundValue.value ? Math.round(difference) : difference;
  });

  const remainingWeeks = computed(() => {
    const difference = getWeeksDiff(currentDate.value, countdownDate.value);
    return roundValue.value ? Math.round(difference) : difference;
  });

  const remainingMonths = computed(() =>
    getMonthsDiff(currentDate.value, countdownDate.value)
  );

  const remainingYears = computed(() =>
    getYearsDiff(currentDate.value, countdownDate.value)
  );

  /**
   * Pause the countdown.
   */
  const pauseCountdown = () => {
    clearInterval(timeInterval.value);
  };

  /**
   * Resume the countdown.
   *
   * DateCountdown is aways compared with current date, on resume it will jump to current difference.
   * If you want a more controllable counter, please use the NumberCountdown
   */
  const resumeCountdown = () => {
    const currentNewDate = new Date();
    const countDownDiff =
      countdownDate.value.getTime() - currentNewDate.getTime();

    if (countDownDiff > 0) {
      currentDate.value = currentNewDate;
      initInterval();
    } else {
      // reset to zero if less than zero (you're trying to start a not started or a passed countdown)
      currentDate.value = countdownDate.value;
    }
  };

  const startCountdown = (
    date: Date,
    interval: number = 1000,
    round: boolean = true
  ) => {
    // Clear a possible previsous interval before starting so the user can use it to start with different parameters
    clearInterval(timeInterval.value);

    // Check the date before starting
    if (date instanceof Date && date > new Date()) {
      countdownDate.value = date;
    } else {
      console.error("Invalid countdown date");
      // reset to zero on error
      countdownDate.value = new Date();
      currentDate.value = countdownDate.value;
    }

    if (typeof interval !== "number" && interval <= 0) {
      console.warn("Invalid countInterval parameter, using default 1000ms");
      countIntervalInMs.value = 1000;
    } else {
      countIntervalInMs.value = interval;
    }

    roundValue.value = !!round;

    initInterval();
  };

  return {
    milisseconds: remainingMilisseconds,
    seconds: remainingSeconds,
    minutes: remainingMinutes,
    hours: remainingHours,
    days: remainingDays,
    weeks: remainingWeeks,
    months: remainingMonths,
    years: remainingYears,
    start: startCountdown,
    pause: pauseCountdown,
    resume: resumeCountdown,
  };
}

/**
 *
 * @param countdownTime - Countdown time in miliseconds
 * @param {number} [countInterval=1000] - Interval time in ms to check the counter
 * @returns
 */
export function useNumberCountdown(
  countdownTime: Date,
  countInterval: number = 1000
) {
  const countdownDate = ref<Date>(new Date());
  const countIntervalInMs = ref<number>(countInterval);

  if (countdownTime instanceof Date && countdownTime > countdownDate.value) {
    countdownDate.value = countdownTime;
  } else if (typeof countdownTime === "number" && countdownTime > 0) {
    countdownDate.value = new Date(
      countdownDate.value.getTime() + countdownTime
    );
  } else {
    console.error("Invalid countdown parameters");
  }

  const timeDifferenceInMs = ref(
    countdownDate.value.getTime() - new Date().getTime()
  );

  const updateTimeDifference = () => {
    let newValue = 0;
    if (typeof countdownTime === "number") {
      // if started by a ms number, we just keep removing from difference
      newValue = timeDifferenceInMs.value - countIntervalInMs.value;
    } else {
      // if started as Date, we compare with current date
      newValue = countdownDate.value.getTime() - new Date().getTime();
    }

    timeDifferenceInMs.value = newValue >= 0 ? newValue : 0;
  };

  if (countInterval <= 0) {
    console.warn("Invalid countInterval parameter, using default 1000ms");
    countIntervalInMs.value = 1000;
  }

  const timeInterval = ref<number>(0);
  const initInterval = () => {
    timeInterval.value = setInterval(() => {
      updateTimeDifference();
      if (timeDifferenceInMs.value === 0) {
        clearInterval(timeInterval.value);
      }
    }, countIntervalInMs.value);
  };

  initInterval();

  const remainingMilisseconds = computed(() => {
    return 10;
  });

  const remainingMinutes = computed(() => {
    return 10;
  });

  const remainingHours = computed(() => {
    return 10;
  });

  const remainingDays = computed(() => {
    return 10;
  });

  const remainingWeeks = computed(() => {
    return 10;
  });

  const remainingMonths = computed(() => {
    return 10;
  });

  const remainingYears = computed(() => {
    return 10;
  });

  /**
   * Pause the countdown.
   */
  const startCountdown = () => {
    clearInterval(timeInterval.value);
  };

  /**
   * Pause the countdown.
   */
  const pauseCountdown = () => {
    clearInterval(timeInterval.value);
  };

  /**
   * Resume the countdown.
   * Date is aways compared with current date, on resume it might jump to current difference
   */
  const resumeCountdown = () => {
    clearInterval(timeInterval.value);
  };

  /**
   * Restart the countdown, only effective if the countdown was started with a number.
   */
  const restartCountdown = () => {
    if (typeof countdownTime !== "number") return;
    clearInterval(timeInterval.value);
  };

  // expose managed state as return value
  return {
    milisseconds: remainingMilisseconds,
    minutes: remainingMinutes,
    hours: remainingHours,
    days: remainingDays,
    weeks: remainingWeeks,
    months: remainingMonths,
    remainingYears: remainingYears,
    pause: pauseCountdown,
    resumeCountdown: resumeCountdown,
    start: startCountDown,
  };
}
