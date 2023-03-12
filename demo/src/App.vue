<script setup lang="ts">
import { useDateCountdown } from "../../src/composables/countdown";
import DateCounter from "./components/DateCounter.vue";
</script>

<template>
  <DateCounter />
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
