<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";
import BaseCard from "src/components/BaseCard.vue";
import BaseSpinner from "src/components/BaseSpinner.vue";

const route = useRoute();
const id = ref(route.params.id);

const { data: list, isLoading } = useQuery({
  queryKey: ["get_hadeeths_list", id.value],
  queryFn: async () => {
    try {
      const { data } = await ApiService.get(
        `https://hadeethenc.com/api/v1/hadeeths/list/?language=ru&category_id=${id.value}&page=1&per_page=20`
      );
      return data.data;
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
      <div
        class="q-pa-md dua-weakly flex items-center text-body"
        v-for="(item, n) in list"
        :key="n"
      >
        <div class="flex-1 q-mr-md">{{ item.title }}</div>
        <q-btn
          :to="{
            name: 'HadeethsDetail',
            params: { id: id, itemId: item.id },
          }"
          dense
          color="green-1"
          no-caps
          class="rounded-xs q-px-md text-green-5"
        >
          <q-icon name="arrow_right_alt" />
        </q-btn>
      </div>
    </base-card>
  </q-page>
</template>

<style lang="scss"></style>
