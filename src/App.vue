<script setup>
import { ref } from "vue";

const loading = ref(false);
</script>

<template>
  <div
    class="fullscreen bg-white flex justify-center items-center column q-py-md"
    v-if="loading"
  >
    <q-avatar size="150px" class="q-mb-lg">
      <img src="../src/assets/img/tasbeeh.png" alt="" />
    </q-avatar>
    <q-spinner-ios color="secondary" size="30px" />
  </div>

  <router-view />
</template>

<style lang="scss"></style>
