<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ApiService from "src/services/api.service";

const route = useRoute();

const surah = ref(null);
const loading = ref(false);
const id = ref(route.params.id);

const getSurahById = async () => {
  loading.value = true;
  try {
    const response = await ApiService.get(
      `https://quran-endpoint.vercel.app/quran/${id.value}`
    );
    surah.value = response.data.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

getSurahById();
</script>

<template>
  <q-page>
    <div class="flex justify-center q-py-md" v-if="loading">
      <q-spinner-ios color="secondary" size="30px" />
    </div>

    <div
      class="surah q-py-md q-mx-auto"
      v-if="surah || !loading"
      style="max-width: 700px"
    >
      <div class="flex justify-between q-px-lg text-subtitle2 q-mb-md">
        <p style="width: 50px">{{ surah.number }}</p>
        <p>{{ surah.asma.en.long }}</p>
        <p class="verse-text">{{ surah.asma.ar.long }}</p>
      </div>
      <div class="q-mb-lg">
        <audio controls>
          <source :src="surah.recitation.full" />
        </audio>
      </div>
      <p class="verse-text q-mb-xl" v-if="surah.preBismillah">
        {{ surah.preBismillah.text.ar }}
      </p>
      <div
        v-for="sura in surah.ayahs"
        :key="sura.number.inquran"
        class="text-h6 q-px-md q-mb-sm"
      >
        <div class="verse-text">
          {{ sura.text.ar }}
        </div>
        <div>
          <span class="text-caption">{{ sura.number.insurah }}. </span>
          <span class="text-body1">{{ sura.text.read }}</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.surah {
  text-align: center;
}

.verse-text {
  font-size: 28px;
  font-weight: normal;
  font-family: "Hafs", sans-serif;
}
</style>
