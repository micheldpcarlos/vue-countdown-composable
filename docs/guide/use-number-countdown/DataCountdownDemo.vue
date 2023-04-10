<script setup lang="ts">
import { ref } from "vue";
import { useDateCountdown } from "../../../src/composables/countdown";

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
} = useDateCountdown();

const selectedDate = ref("");
</script>

<template>
  <div class="countdown-demo"></div>
  <input type="date" name="date-input" id="date" v-model.lazy="selectedDate" />
  <br />
  input: {{ new Date(selectedDate) }}
  <input type="number" />
  digits:
  <div>
    <button @click="">-</button>
    <button @click="">+</button>
  </div>
  type:
  <div>
    <button @click="">string</button>
    <button @click="">number</button>
  </div>
  math:
  <div>
    <button @click="">round</button>
    <button @click="">floor</button>
    <button @click="">ceil</button>
  </div>
  value:
  <br />
  typeof value:
</template>
