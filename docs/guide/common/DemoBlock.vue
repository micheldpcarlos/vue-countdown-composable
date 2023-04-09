<script setup lang="ts">
defineProps<{
  repositoryLink: string;
}>();
</script>

<template>
  <div class="demo-block">
    <div class="source-link">
      <a :href="repositoryLink" target="_blank">source</a>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.demo-block {
  position: relative;
  padding: 0 16px 16px;
  border-radius: 8px;
  background: var(--vp-code-block-bg);

  .source-link {
    display: flex;
    justify-content: end;
    a {
      font-size: 12px;
      &:hover {
        text-decoration: none;
        color: var(--vp-c-brand-darker);
      }
    }
  }
}
</style>
