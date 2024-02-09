<script setup></script>

<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style lang="scss">
.base-card {
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  transition: all 0.3s linear;

  &.loading {
    opacity: 0.2;
  }
}
</style>
