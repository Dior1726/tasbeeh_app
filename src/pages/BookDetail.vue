<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";

const route = useRoute();
const id = ref(route.params.id);

const { data: surah, isLoading } = useQuery({
  queryKey: ["get_verses", id.value],
  queryFn: () => getSurahById(),
});

const getSurahById = async () => {
  try {
    const response = await ApiService.get(
      `https://quran-endpoint.vercel.app/quran/${id.value}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

getSurahById();
</script>

<template>
  <q-page class="">
    <div class="flex justify-center q-py-md" v-if="isLoading">
      <q-spinner-ios color="secondary" size="30px" />
    </div>

    <div class="text-center q-py-md q-mx-auto" v-else style="max-width: 700px">
      <div class="flex justify-between q-px-lg q-mb-lg items-center">
        <div class="text-weight-medium">{{ surah.asma.en.long }}</div>
        <div class="verse-text">{{ surah.asma.ar.long }}</div>
      </div>
      <div class="q-mb-lg">
        <audio controls>
          <source :src="surah.recitation.full" />
        </audio>
      </div>
      <div class="verse-text q-mb-lg" v-if="surah.preBismillah">
        {{ surah.preBismillah.text.ar }}
      </div>
      <div
        v-for="sura in surah.ayahs"
        :key="sura.number.inquran"
        class="verse-item q-px-md q-py-sm"
      >
        <div class="verse-text">
          {{ sura.text.ar }}
        </div>
        <div>
          <span class="text-caption">
            {{ sura.number.insurah }}. {{ sura.text.read }}
          </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.verse-item {
  border-bottom: 1px solid $grey-3;
}

.verse-text {
  font-size: 32px;
  font-weight: normal;
  font-family: "Hafs", sans-serif;
  line-height: 1.5;
}
</style>
