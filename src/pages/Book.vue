<script setup>
import { ref } from "vue";
import ApiService from "../services/api.service.js";

const surahList = ref(null);
const loading = ref(false);

// "https://quran-endpoint.vercel.app/quran/"

const getSurah = async () => {
  loading.value = true;
  try {
    const response = await ApiService.get(
      "https://quran-endpoint.vercel.app/quran/"
    );
    surahList.value = response.data.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

getSurah();
</script>

<template>
  <q-page class="q-pa-md">
    <div class="flex justify-center q-py-md" v-if="loading">
      <q-spinner-ios color="secondary" size="30px" />
    </div>

    <div class="book-card" v-else>
      <router-link
        class="book-row text-dark"
        v-for="(surah, n) in surahList"
        :key="n"
        :to="{ path: `quran/${surah.number}` }"
      >
        <div class="flex">
          <div class="book-row__number">
            {{ surah.number }}
          </div>
          <div>
            <div class="book-row__title">{{ surah.asma.en.long }}</div>
            <span class="book-row__caption">
              {{ surah.asma.translation.en }}
            </span>
          </div>
        </div>
        <div class="book-row__arabic">
          {{ surah.asma.ar.short }}
        </div>
      </router-link>
    </div>
  </q-page>
</template>

<style lang="scss">
.book-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 700px;
  margin: 0 auto;
}
.book-row {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-decoration: none;
  border-bottom: 1px solid $grey-3;

  &__number {
    margin-right: 12px;
    background: $green-2;
    width: 30px;
    height: 30px;
    border-radius: $rounded-sm;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__caption {
    color: $grey-5;
    font-size: 12px;
  }

  &__arabic {
    color: $green-5;
    font-family: "Nabi";
    font-size: 20px;
  }
}
</style>
