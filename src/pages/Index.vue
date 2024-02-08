<script setup>
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";

const { data: hadeeths, isLoading } = useQuery({
  queryKey: ["get_hadeeths"],
  queryFn: async () => {
    try {
      const { data } = await ApiService.get(
        "https://hadeethenc.com/api/v1/hadeeths/list/?language=ru&category_id=3&page=2&per_page=10"
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>

<template>
  <q-page class="q-pa-md text-body1">
    <div class="flex justify-center q-py-md" v-if="isLoading">
      <q-spinner-ios color="secondary" size="30px" />
    </div>

    <div v-else style="max-width: 700px" class="q-mx-auto">
      <div
        class="text-white text-bold q-mb-md text-center dua-weakly rounded-lg q-pa-xs"
      >
        Хадисы дня
      </div>
      <div class="q-mb-md hadith" v-if="hadeeths">
        <div
          class="q-pa-md text-white dua-weakly rounded-xl"
          v-for="(item, n) in hadeeths"
          :key="n"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.dua-weakly {
  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(4px);
}
.hadith {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}
</style>
