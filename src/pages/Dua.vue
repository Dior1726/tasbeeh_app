<script setup>
import { useQuery } from "@tanstack/vue-query";
import ApiService from "src/services/api.service";

const { data, isLoading } = useQuery({
  queryKey: ["get_pray_times"],
  queryFn: () => getTimes(),
});

const getTimes = async () => {
  const { data } = await ApiService.get(
    "https://namaztimes.kz/api/praytimes?id=8600&type=json"
  );
  return data;
};
</script>

<template>
  <q-page class="q-pa-md">
    <div class="q-pa-lg bg-green-3 text-white rounded-xl q-mb-lg flex column">
      <div class="q-mb-md text-h4">Pray times</div>
      <div class="flex justify-end">
        <img src="../assets/img/book.svg" />
      </div>
    </div>
    <div v-if="isLoading">loading...</div>
    <div v-else class="q-pa-lg bg-green-3 text-white rounded-xl q-mb-lg">
      <div class="flex justify-between text-h6 text-grey-4">
        <span>
          {{ data.date }}
        </span>
        <span>
          {{ data.islamic_date }}
        </span>
      </div>
      <div class="flex justify-between q-mt-md q-pa-sm bg-green-5 rounded-lg">
        <div class="flex column items-center">
          <span>Fajr</span>
          <span>
            {{ data.praytimes.bamdat }}
          </span>
        </div>
        <div class="flex column items-center">
          <span>Zuhr</span>
          <span>
            {{ data.praytimes.besin }}
          </span>
        </div>
        <div class="flex column items-center">
          <span>Asr</span>
          <span>
            {{ data.praytimes.ekindi }}
          </span>
        </div>
        <div class="flex column items-center">
          <span>Magrib</span>
          <span>
            {{ data.praytimes.aqsham }}
          </span>
        </div>
        <div class="flex column items-center">
          <span>Isha</span>
          <span>
            {{ data.praytimes.quptan }}
          </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss"></style>
