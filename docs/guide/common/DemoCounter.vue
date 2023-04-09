<script setup lang="ts">
defineProps<{
  miliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
}>();
</script>

<template>
  <div class="demo-counter">
    <div class="number">
      <div class="value">{{ years }}</div>
      <div class="label">Years</div>
    </div>
    <div class="number">
      <div class="value">{{ months }}</div>
      <div class="label">Months</div>
    </div>
    <div class="number">
      <div class="value">{{ days }}</div>
      <div class="label">Days</div>
    </div>
    <div class="number">
      <div class="value">{{ hours }}</div>
      <div class="label">Hours</div>
    </div>
    <div class="number">
      <div class="value">{{ minutes }}</div>
      <div class="label">Minutes</div>
    </div>
    <div class="number">
      <div class="value">{{ seconds }}</div>
      <div class="label">Seconds</div>
    </div>
    <div class="number">
      <div class="value">{{ miliseconds }}</div>
      <div class="label">Miliseconds</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-counter {
  display: flex;
  justify-content: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  flex-wrap: wrap;

  .number {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;

    .value {
      font-weight: bold;
      font-size: 28px;
    }
    .label {
      font-size: 12px;
      line-height: 1.5;
      color: var(--vp-c-brand-dark);
    }
  }
}
</style>
