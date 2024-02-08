<script setup>
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";
import BaseCard from "src/components/BaseCard.vue";
import BaseSpinner from "src/components/BaseSpinner.vue";

const { data: hadeeths, isLoading } = useQuery({
  queryKey: ["get_hadeeths"],
  queryFn: async () => {
    try {
      const { data } = await ApiService.get(
        "https://hadeethenc.com/api/v1/categories/roots/?language=ru"
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
    <base-card class="hadith" v-else>
      <router-link
        :to="{ name: 'HadeethsCategory', params: { id: item.id } }"
        class="q-pa-md dua-weakly flex justify-between"
        v-for="(item, n) in hadeeths"
        :key="n"
      >
        <div class="flex-1">
          {{ item.title }}
        </div>
        <div class="hadeeths-count">
          {{ item.hadeeths_count }}
        </div>
      </router-link>
    </base-card>
  </q-page>
</template>

<style lang="scss">
.dua-weakly {
  border-bottom: 1px solid $grey-3;
  text-decoration: none;
  color: $dark;
  font-size: 16px;
}
.hadith {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

.hadeeths-count {
  margin-left: 12px;
  font-size: 12px;
  background: $green-2;
  width: 30px;
  height: 30px;
  border-radius: $rounded-sm;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
