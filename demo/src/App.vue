<script setup lang="ts">
import { useDateCountdown } from "../../src/composables/countdown";
const {
  milisseconds,
  seconds,
  minutes,
  hours,
  days,
  weeks,
  months,
  years,
  pause,
  resume,
  start,
} = useDateCountdown();

const startDate2 = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 1);
  start(date, 1000, true);
};
</script>

<template>
  <div class="item">
    <div>Milisseconds</div>
    <div>{{ milisseconds }}</div>
  </div>
  <br />

  <div class="item">
    <div>Seconds</div>
    <div>{{ seconds }}</div>
  </div>
  <br />

  <div class="item">
    <div>Minutes</div>
    <div>{{ minutes }}</div>
  </div>
  <br />

  <div class="item">
    <div>Hours</div>
    <div>{{ hours }}</div>
  </div>
  <br />
  <div class="item">
    <div>Days</div>
    <div>{{ days }}</div>
  </div>
  <br />

  <div class="item">
    <div>Weeks</div>
    <div>{{ weeks }}</div>
  </div>
  <br />

  <div class="item">
    <div>Months</div>
    <div>{{ months }}</div>
  </div>
  <br />

  <div class="item">
    <div>Years</div>
    <div>{{ years }}</div>
  </div>
  <br />

  <button @click="() => start(new Date('03-02-2026 09:13:50'), 1, false)">
    START
  </button>
  <button @click="startDate2">START 2</button>
  <button @click="pause">PAUSE</button>
  <button @click="resume">RESUME</button>
</template>

<style>
#app {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.item {
  width: 50%;
}

.item > div {
  width: 50%;
  text-align: left;
}
</style>
