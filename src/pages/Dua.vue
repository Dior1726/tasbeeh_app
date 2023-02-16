<template>
  <q-page class="q-pa-md">
    
    <q-list class="duas-box q-mx-auto" style="max-width: 700px">
      <q-item
        v-for="item, n in 6" :key="n"
        clickable 
        class="duas q-pa-md q-px-lg rounded-lg text-bold"
      >
        <div>
          Ibrohim (a.s) duolari
        </div>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
export default {
  name: 'DuaPage'
}
</script>

<style lang="scss" scoped>
.duas-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.duas {
  background: rgba(255, 255, 255, .4);
  backdrop-filter: blur(4px);
}
</style>