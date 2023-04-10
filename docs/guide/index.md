# Get Started

Vue Countdown Composable is a couple of utility functions based on Composition API. We assume you are already familiar with the basic ideas of [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) before you continue.

## Installation

```bash
npm i vue-countdown-composable
```

## Usage Example

Simply importing the functions you need from `vue-countdown-composable`

- [useDateCountdown](./use-date-countdown/) to countdown to a future date
- [useNumberCountdown](./use-number-countdown/) to countdown to future time in miliseconds

### useDateCountdown

For details and demo refer to [useDateCountdown](./use-date-countdown/)

```vue
<script setup>
import { useDateCountdown } from "vue-countdown-composable";

// exposes computed properties and methods
const { seconds, minutes, hours, days, start } = useDateCountdown();
const futureDate = new Date("2040-08-13");

// start counter with future date
start(futureDate);
</script>

<template>
  <div>Days: {{ days }}</div>
  <div>Hours: {{ hours }}</div>
  <div>Minutes: {{ minutes }}</div>
  <div>Seconds: {{ seconds }}</div>
</template>
```

### useNumberCountdown

For details and demo refer to [useNumberCountdown](./use-number-countdown/)

```vue
<script setup>
import { useNumberCountdown } from "vue-countdown-composable";

// exposes computed properties and methods
const { seconds, minutes, hours, days, start } = useNumberCountdown();

// time in miliseconds
const TEN_DAYS_IN_MILISECONDS = 864_000_000;

// start counter with future date
start(TEN_DAYS_IN_MILISECONDS);
</script>

<template>
  <div>Days: {{ days }}</div>
  <div>Hours: {{ hours }}</div>
  <div>Minutes: {{ minutes }}</div>
  <div>Seconds: {{ seconds }}</div>
</template>
```
