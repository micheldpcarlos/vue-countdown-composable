<script setup lang="ts">
import { ref } from "vue";
import { useDateCountdown } from "../../../src/composables/countdown";
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";

const {
  milisseconds,
  seconds,
  minutes,
  hours,
  days,
  months,
  years,
  pause,
  resume,
  start,
} = useDateCountdown();

const start2Hours10MinCountdownDefault = () => {
  const date = new Date();
  date.setHours(initialDate.getHours() + 1);
  date.setMinutes(date.getMinutes() + 10);
  start(date);
};

const initialDate = new Date();
initialDate.setFullYear(initialDate.getFullYear() + 2);
// initialDate.setMonth(initialDate.getMonth() + 3);
// initialDate.setHours(initialDate.getHours() + 24);
// initialDate.setMinutes(initialDate.getMinutes() + 1);
const date = ref(initialDate);
</script>

<template>
  <div class="date">
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
      <div>Months</div>
      <div>{{ months }}</div>
    </div>
    <br />

    <div class="item">
      <div>Years</div>
      <div>{{ years }}</div>
    </div>
    <br />

    <button @click="() => start(date, 1, false)">START</button>
    <button @click="start2Hours10MinCountdownDefault">Start now + 2h and 10min</button>
    <button @click="pause">PAUSE</button>
    <button @click="resume">RESUME</button>

    <DatePicker v-model="date" mode="dateTime" is24hr>
      <template v-slot="{ inputValue, inputEvents }">
        <input
          class="bg-white border px-2 py-1 rounded"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </DatePicker>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
