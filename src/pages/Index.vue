<script setup>
const imgSrc = (src) => {
  return new URL(src, import.meta.url);
};

const blocks = [
  {
    title: "Quran",
    src: imgSrc("../assets/img/read.svg"),
    color: "#E1FADC",
    path: "Quran",
  },
  {
    title: "Listening",
    src: imgSrc("../assets/img/listening.svg"),
    color: "#FEF6F4",
    path: "Quran",
  },
  {
    title: "Pray times",
    src: imgSrc("../assets/img/list.svg"),
    color: "#FFFAF0",
    path: "Dua",
  },
  {
    title: "Hadeeth",
    src: imgSrc("../assets/img/tasb.svg"),
    color: "#F5F6FD",
    path: "Hadeeths",
  },
  {
    title: "Tafsirs",
    src: imgSrc("../assets/img/read.svg"),
    color: "#E1FADC",
    path: "Zikr",
  },
];
</script>

<template>
  <q-page class="q-pa-md">
    <div class="q-pa-lg bg-green-3 text-white rounded-xl q-mb-lg flex column">
      <div class="q-mb-md text-h4">Tasbeeh</div>
      <div class="flex justify-end">
        <img src="../assets/img/book.svg" />
      </div>
    </div>

    <div class="menu">
      <router-link
        class="menu-card"
        v-for="block in blocks"
        :key="block.title"
        :style="{ background: block.color }"
        :to="{ name: block.path }"
      >
        <div class="menu-card__title">
          {{ block.title }}
        </div>
        <div class="menu-card__img">
          <img :src="block.src" :alt="block.title" />
        </div>
      </router-link>
    </div>
  </q-page>
</template>

<style lang="scss">
.menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  .menu-card {
    text-decoration: none;
    padding: 16px;
    border-radius: $rounded-xl;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.2s linear;

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    &__title {
      flex: 1;
      font-size: 20px;
      color: $green-5;
      font-weight: bold;
    }

    &__img {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      img {
        max-width: 60px;
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
