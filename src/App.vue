<template>
  <div id="q-app">

    <div class="fullscreen bg-white flex justify-center items-center column q-py-md" v-if="loading">
      <q-avatar size="150px" class="q-mb-lg">
        <img src="../src/assets/img/tasbeeh.png" alt="">
      </q-avatar>
      <q-spinner-ios
        color="secondary"
        size="30px"
      />
    </div>

    <div v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.loading = false
        }, 1200)
      }
    }
  }
}
</script>
