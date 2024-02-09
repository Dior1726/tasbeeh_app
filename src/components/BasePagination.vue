<script setup>
import useScrollTop from "src/composables/useScrollTop";

const props = defineProps(["modelValue", "max"]);
const emit = defineEmits(["update:modelValue", "nextPageHandler"]);

const { scrollTop } = useScrollTop();

const nextPage = (page) => {
  emit("update:modelValue", page);
  emit("nextPageHandler");
  scrollTop();
};
</script>

<template>
  <div class="flex justify-center">
    <q-pagination
      flat
      color="grey"
      direction-links
      active-color="secondary"
      :modelValue="modelValue"
      @update:modelValue="nextPage"
      :max="max"
      :max-pages="6"
    />
  </div>
</template>

<style lang="scss"></style>
