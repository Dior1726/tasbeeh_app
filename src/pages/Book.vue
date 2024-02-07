<script setup>
import { ref } from "vue";
import ApiService from "../services/api.service.js";

const surahList = ref(null);
const loading = ref(false);

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
      <q-spinner-ios color="white" size="30px" />
    </div>

    <q-list class="book-box q-mx-auto" v-else style="max-width: 700px">
      <q-item
        v-for="(surah, n) in surahList"
        :key="n"
        clickable
        v-ripple
        class="book q-pa-md q-px-lg rounded-lg text-bold"
        :to="{ path: `quran/${surah.number}` }"
      >
        <div class="full-width flex justify-between">
          <div>{{ n + 1 }}. {{ surah.asma.en.long }}</div>
          <div>
            {{ surah.asma.ar.long }}
          </div>
        </div>
      </q-item>
    </q-list>
  </q-page>
</template>

<style lang="scss">
.book-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.book {
  background: rgba(255, 255, 255, 0.4);
  color: #222;
  backdrop-filter: blur(4px);
}
</style>
