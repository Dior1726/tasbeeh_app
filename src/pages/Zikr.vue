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
  name: "ZikrPage",
  data() {
    return {
      zikrs: [
        {
          id: 1,
          name: "Alhamdulillah",
        },
        {
          id: 2,
          name: "SubhanAllah",
        },
        {
          id: 3,
          name: "Allahu Akbar",
        },
        {
          id: 4,
          name: "La ilaha illAllah",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.zikr-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.zikr {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  backdrop-filter: blur(4px);
}
</style>
