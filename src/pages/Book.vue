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
      "https://api.quran.com/api/v4/chapters?language=ru"
    );
    surahList.value = response.data.chapters;
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

    <q-list class="book-box q-mx-auto" v-else style="max-width: 700px">
      <q-item
        v-for="(surah, n) in surahList"
        :key="n"
        clickable
        v-ripple
        class="book q-pa-md q-px-lg rounded-lg"
        :to="{ path: `quran/${surah.id}` }"
      >
        <div class="full-width flex justify-between">
          <div>
            <div class="text-bold">{{ n + 1 }}. {{ surah.name_simple }}</div>
            <span class="text-grey-9"> {{ surah.translated_name.name }} </span>
          </div>
          <div class="text-arabic text-green-5">
            {{ surah.name_arabic }}
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
  background: rgba(0, 0, 0, 0.5);
  color: #111;
  backdrop-filter: blur(4px);
}

.text-arabic {
  font-family: "Hafs";
}
</style>
