<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";
import BaseCard from "src/components/BaseCard.vue";
import BaseSpinner from "src/components/BaseSpinner.vue";

const route = useRoute();
const id = ref(route.params.itemId);

const { data, isLoading } = useQuery({
  queryKey: ["get_hadeeths_single", id.value],
  queryFn: async () => {
    try {
      const { data } = await ApiService.get(
        `https://hadeethenc.com/api/v1/hadeeths/one/?language=ru&id=${id.value}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>

<template>
  <q-page class="q-pa-md">
    <base-spinner v-if="isLoading" />
    <base-card class="hadeeth-card" v-else>
      <div class="hadeeth-card__info flex justify-between">
        <div class="q-pa-sm rounded-xs bg-green-1">
          {{ data.grade }}
        </div>
        <div class="q-pa-sm rounded-xs bg-green-1">
          {{ data.attribution }}
        </div>
      </div>
      <div class="hadeeth-card__title">
        {{ data.title }}
      </div>
      <div class="hadeeth-card__text">
        <div class="text-h6 q-mb-md text-center q-pa-sm rounded-xs bg-green-1">
          Хадис
        </div>
        <div class="hadeeth-card__arabic">
          {{ data.hadeeth_ar }}
        </div>
        <div>
          {{ data.hadeeth }}
        </div>
      </div>
      <div class="hadeeth-card__description">
        <div class="text-h6 q-mb-md text-center q-pa-sm rounded-xs bg-green-1">
          Разъяснение
        </div>
        {{ data.explanation }}
      </div>
      <div class="hadeeth-card__hint">
        <div class="text-h6 q-mb-md text-center q-pa-sm rounded-xs bg-green-1">
          Полезные выводы из хадиса
        </div>
        <div v-for="(hint, id) in data.hints" :key="id">
          <div class="q-mb-sm">
            {{ hint }}
          </div>
        </div>
      </div>
    </base-card>
  </q-page>
</template>

<style lang="scss">
.hadeeth-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  &__info {
    gap: 12px;
  }

  &__arabic {
    direction: rtl;
    font-family: "Hafs";
    font-size: 20px;
  }
}
</style>
