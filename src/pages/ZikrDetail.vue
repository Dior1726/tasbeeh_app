<template>
  <q-page class="q-pa-md flex justify-center">

    <div class="flex column justify-between items-center">
      <div class="zikr q-pa-xl rounded-lg q-mx-auto q-mb-xl text-h6" style="max-width: 800px">
        {{this.$route.query.name}}
      </div>

      <div class="q-pa-md q-mt-xl" >
        <q-btn 
          color="secondary" 
          @click="resetCount" 
          rounded   
          class="rounded-full shadow-10 q-mr-md" 
          style="width: 50px; height: 50px"
        >
          <q-icon name="refresh" />
        </q-btn>
        <q-btn 
          color="secondary" 
          @click="addCount" 
          rounded 
          class="rounded-full text-h4 shadow-10" 
          style="width:150px; height: 150px"
        >
          {{ count }}
        </q-btn>
        <q-btn 
          color="secondary" 
          @click="resetCount" 
          rounded 
          class="rounded-full shadow-10 q-ml-md" 
          style="width: 50px; height: 50px"
        >
          <q-icon name="refresh" />
        </q-btn>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'ZikrDetail',
  data() {
    return {
      count: 1
    }
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    addCount() {
      this.count++
    },
    resetCount() {
      this.count = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.zikr {
  background: rgba(0, 0, 0, .4);
  color: #fff;
  backdrop-filter: blur(4px);
}
</style>