<template>
  <q-page class="q-pa-md">

    <q-list class="zikr-box q-mx-auto" style="max-width: 700px;">
      <q-item
        v-for="item, n in zikrs" :key="n"
        clickable 
        class="zikr q-pa-md q-px-lg rounded-lg"
        :to="{path: `zikr/${item.id}`, query: {name: item.name}}"
      >
        <div class="full-width flex">
          <div class="q-mr-md">
            {{n + 1}}
          </div>
          <div>
            {{item.name}}
          </div>
        </div>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
export default {
  name: 'ZikrPage',
  data() {
    return {
      zikrs: [
        {
          id: 1,
          name: 'Alhamdulillah'
        },
        {
          id: 2,
          name: 'SubhanAllah'
        },
        {
          id: 3,
          name: 'Allahu Akbar'
        },
        {
          id: 4,
          name: 'La ilaha illAllah'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.zikr-box {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.zikr {
  background: rgba(0, 0, 0, .4);
  color: #fff;
  backdrop-filter: blur(4px);
}
</style>