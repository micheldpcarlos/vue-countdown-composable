<script setup lang="ts">
import { ref } from "vue";
import { useDateCountdown } from "../../../src/composables/countdown";
import DemoCounter from "../DemoCounter.vue";
import DemoBlock from "../DemoBlock.vue";

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
// ;
</script>

<template>
  <DemoBlock repository-link="http://uol.com">
    <DemoCounter
      :miliseconds="miliseconds"
      :seconds="seconds"
      :minutes="minutes"
      :hours="hours"
      :days="days"
      :months="months"
      :years="years"
    />

    <button class="demo-button" @click="start(new Date('2040-08-13'))">
      start countdown
    </button>
  </DemoBlock>
</template>
