<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "v-calendar";

defineProps<{ msg: string }>();

const count = ref(0);
const date = ref();
</script>

<template>
  <DatePicker v-model="date" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
