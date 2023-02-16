<template>
  <q-page class="q-pa-md">

    <div class="flex justify-center q-py-md" v-if="loading">
      <q-spinner-ios
        color="white"
        size="30px"
      />
    </div>

    <q-list class="book-box q-mx-auto" v-else style="max-width: 700px">
      <q-item
        v-for="surah, n in surahList" :key="n"
        clickable 
        v-ripple
        class="book q-pa-md q-px-lg rounded-lg text-bold"
        :to="{path: `quran/${surah.number}`}" 
      >
        <div class="full-width flex justify-between">
          <div>
            {{n+1}}. {{ surah.asma.en.long}}
          </div>
          <div>
            {{surah.asma.ar.long}}
          </div>
        </div>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      surahList: null,
      loading: true
    }
  },
  mounted() {
    this.getSurah()
  },
  methods: {
    getSurah() {
      this.$axios.get('https://quran-endpoint.vercel.app/quran/')
        .then((res) => {
          this.surahList = res.data.data
          this.loading = false
        })
        .catch(e => console.log(e.message))
    }
  }
}
</script>

<style lang="scss" scoped>
.book-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.book {
  background: rgba(255, 255, 255, .4);
  color: #222;
  backdrop-filter: blur(4px);
}
</style>
