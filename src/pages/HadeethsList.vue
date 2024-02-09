<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";
import BaseCard from "src/components/BaseCard.vue";
import BaseSpinner from "src/components/BaseSpinner.vue";
import BasePagination from "src/components/BasePagination.vue";

const route = useRoute();
const id = ref(route.params.id);
const pagination = ref({
  current_page: 1,
  last_page: 1,
});

const { data, isLoading, isSuccess, refetch, isFetching } = useQuery({
  queryKey: ["get_hadeeths_list", id.value],
  queryFn: async () => {
    try {
      const { data } = await ApiService.get(
        `https://hadeethenc.com/api/v1/hadeeths/list/?language=ru&category_id=${id.value}&page=${pagination.value.current_page}&per_page=10`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
});

const nextPageHandler = async () => {
  await refetch();
};

watchEffect(() => {
  if (!isLoading.value && isSuccess.value) {
    pagination.value.current_page = +data.value.meta.current_page;
    pagination.value.last_page = +data.value.meta.last_page;
  }
});
</script>

<template>
  <q-page class="q-pa-md">
    <base-spinner v-if="isLoading" />
    <base-card v-else class="hadith" :class="{ loading: isFetching }">
      <div
        class="q-pa-md dua-weakly flex items-center text-body"
        v-for="(item, n) in data.data"
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
      <base-pagination
        v-model="pagination.current_page"
        :max="pagination.last_page"
        @nextPageHandler="nextPageHandler"
      />
    </base-card>
  </q-page>
</template>

<style lang="scss"></style>
