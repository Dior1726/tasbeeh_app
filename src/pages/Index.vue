<template>
  <q-page class="q-pa-md text-body1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat
    accusantium ut ipsum excepturi voluptate labore laboriosam et ducimus quos!
    Incidunt pariatur nesciunt, repellendus veritatis repellat numquam aut
    voluptate aliquid!

    <!-- <div class="flex justify-center q-py-md" v-if="loading">
      <q-spinner-ios
        color="secondary"
        size="30px"
      />
    </div>

    <div v-else style="max-width: 700px" class="q-mx-auto">
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

      <div class="text-white text-bold q-mb-md text-center dua-weakly rounded-lg q-pa-xs">
        Хадисы дня
      </div>
      <div class="q-mb-md hadith" v-if="hadiths">
        <div class="q-pa-md text-white dua-weakly rounded-xl" v-for="item, n in hadiths" :key="n">
          {{item.title}}
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script>
// export default {
//   name: "HomePage",
//   data() {
//     return {
//       data: null,
//       time: null,
//       namazTimes: null,
//       calendar: null,
//       hadiths: null,
//       loading: true,
//     };
//   },
//   mounted() {
//     this.getData();
//     this.getHadith();
//   },
//   methods: {
//     getData() {
//       this.$axios
//         .get("https://api.pray.zone/v2/times/today.json?city=shymkent&school=4")
//         .then((res) => {
//           this.data = res.data.results;
//           this.namazTimes = res.data.results.datetime[0].times;
//           this.calendar = res.data.results.datetime[0].date;
//         })
//         .catch((e) => console.log(e.message));
//     },
//     getHadith() {
//       this.$axios
//         .get(
//           "https://hadeethenc.com/api/v1/hadeeths/list/?language=ru&category_id=3&page=2&per_page=10"
//         )
//         .then((res) => {
//           this.hadiths = res.data.data;
//           this.loading = false;
//         })
//         .catch((e) => console.log(e.message));
//     },
//   },
//   computed: {},
// };
</script>

<style lang="scss" scoped>
.time-box {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  color: #fff;
}

.dua-weakly {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}

.hadith {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}
</style>
