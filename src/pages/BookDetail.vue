<template>
  <q-page class="">
    <div class="flex justify-center q-py-md" v-if="loading">
      <q-spinner-ios color="white" size="30px" />
    </div>

    <div
      class="surah q-py-md text-white q-mx-auto"
      v-if="surah || !loading"
      style="max-width: 700px"
    >
      <div class="flex justify-between q-px-lg text-subtitle2 q-mb-md">
        <p style="width: 50px">{{ surah.number }}</p>
        <p>{{ surah.asma.en.long }}</p>
        <p>{{ surah.asma.ar.long }}</p>
      </div>
      <p class="verse-text q-mb-xl" v-if="surah.preBismillah">
        {{ surah.preBismillah.text.ar }}
      </p>
      <p
        v-for="sura in surah.ayahs"
        :key="sura.number.inquran"
        class="text-h6 border-b q-px-md verse-text"
      >
        {{ sura.text.ar }}<br />
        <div>
          <span class="text-caption">{{ sura.number.insurah }}. </span>
          <span class="text-body1">{{ sura.text.read }}</span>
        </div>
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      surah: null,
      id: this.$route.params.id,
      loading: true,
    };
  },
  created() {
    if (this.id) {
      this.getSurahById();
    }
  },
  mounted() {},
  methods: {
    getSurahById() {
      this.$axios
        .get(`https://quran-endpoint.vercel.app/quran/${this.id}`)
        .then((res) => {
          this.surah = res.data.data;
          this.loading = false;
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.surah {
  text-align: center;
}

.verse-text {
  font-size: 28px;
  font-weight: normal;
  font-family: "Hafs", sans-serif;
  // font-family: "Nabi", sans-serif;
}
</style>
