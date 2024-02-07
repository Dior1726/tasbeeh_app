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

    <!--  <div v-else style="max-width: 700px" class="q-mx-auto">
      <div class="q-mb-lg">
        <div class="time-box q-pa-md q-py-lg rounded-xl q-my-md shadow-12" v-if="namazTimes">
          <div class="flex justify-between q-mb-lg">
            <div>
              {{calendar.gregorian}}
            </div>
            <div class="text-white">
              {{data.location.city}}
            </div>
            <div>
              {{calendar.hijri}}
            </div>
          </div>
          <div class="flex justify-between text-center">
            <div>
              <div class="q-mb-xs text-subtitle2">
                Фаджр
              </div>
              <div>
                {{namazTimes.Fajr}}
              </div>
            </div>
            <div>
              <div class="q-mb-xs text-subtitle2">
                Зухр
              </div>
              <div>
                {{namazTimes.Dhuhr}}
              </div>
            </div>
            <div>
              <div class="q-mb-xs text-subtitle2">
                Аср
              </div>
              <div>
                {{namazTimes.Asr}}
              </div>
            </div>
            <div>
              <div class="q-mb-xs text-subtitle2">
                Магриб
              </div>
              <div>
                {{namazTimes.Maghrib}}
              </div>
            </div>
            <div>
              <div class="q-mb-xs text-subtitle2">
                Иша
              </div>
              <div>
                {{namazTimes.Isha}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
  </q-page>
</template>

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

<style lang="scss" scoped>
.time-box {
  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(4px);
  color: #fff;
}

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
