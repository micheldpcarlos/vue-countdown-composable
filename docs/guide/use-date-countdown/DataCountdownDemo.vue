<script setup lang="ts">
import { ref } from "vue";
import { useDateCountdown } from "../../../src/composables/countdown";
import DemoBlock from "../common/DemoBlockWrapper.vue";
import DemoCounter from "../common/DemoCounterComponent.vue";

const demoFileLink =
  "https://github.com/micheldpcarlos/vue-countdown-composable/blob/main/docs/guide/use-date-countdown/DataCountdownDemo.vue";

const {
  miliseconds,
  seconds,
  minutes,
  hours,
  days,
  months,
  years,
  start,
  pause,
  resume,
  stop,
} = useDateCountdown();

const selectedDate = ref("");
const UPDATE_INTERVAL_MS = 100;
</script>

<template>
  <DemoBlock :repository-link="demoFileLink">
    <DemoCounter
      :miliseconds="miliseconds"
      :seconds="seconds"
      :minutes="minutes"
      :hours="hours"
      :days="days"
      :months="months"
      :years="years"
    />

    <button
      class="demo-button"
      @click="start(new Date('2040-08-13'), UPDATE_INTERVAL_MS)"
    >
      start countdown
    </button>
  </DemoBlock>
</template>
