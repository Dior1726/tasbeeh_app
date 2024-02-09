<template>
  <q-page class="q-pa-md">
    <div class="q-pa-lg bg-green-3 text-white rounded-xl q-mb-lg flex column">
      <div class="q-mb-md text-h4">Pray times</div>
      <div class="flex justify-end">
        <img src="../assets/img/book.svg" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "DuaPage",
};
</script>

<style lang="scss" scoped>
.duas-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.duas {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
}
</style>
