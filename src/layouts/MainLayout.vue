<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { appLinks } from "../constants/links";
import useGoBack from "../composables/useGoBack";

const { goBack } = useGoBack();
const route = useRoute();
const left = ref(false);
const pageName = ref(route.meta.name);
const routeName = ref(route.name);

const toggleLeftDrawer = () => {
  left.value = !left.value;
};

watchEffect(() => {
  pageName.value = route.meta.name;
  routeName.value = route.name;
});
</script>

<template>
  <q-layout view="lHh LpR lFf" class="bg-whie">
    <q-header class="text-green-3">
      <q-toolbar>
        <q-btn
          v-if="routeName == 'Quran_detail' || routeName == 'Zikr_detail'"
          flat
          icon="arrow_back"
          color="green-3"
          class="rounded-sm"
          size="md"
          @click="goBack"
        />
        <q-btn
          class="gt-xs"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="absolute-center">
          {{ pageName }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      v-model="left"
      show-if-above
      side="left"
      class="q-pa-lg gt-xs"
    >
      <div class="q-pa-md w-full text-center text-white border-b q-mb-md">
        <q-avatar size="100px" class="q-mx-auto">
          <img src="../assets/img/tasbeeh.png" alt="" />
        </q-avatar>
        <h6 class="q-mt-sm q-mb-auto">Tasbeeh App</h6>
        <p class="q-mb-auto text-weight-light">by Mukhammadyor</p>
      </div>
      <q-list class="q-pa-sm">
        <q-item
          clickable
          v-ripple
          exact
          v-for="link in appLinks"
          :key="link.name"
          :to="link.path"
          class="rounded-sm text-grey-4"
        >
          <q-item-section avatar>
            <q-avatar>
              <q-icon :name="link.icon" />
            </q-avatar>
          </q-item-section>
          <q-item-section> {{ link.name.toUpperCase() }} </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!--  Mobile Navbar   -->
    <q-footer bordered class="lt-sm">
      <q-list class="flex justify-around items-center q-py-sm">
        <q-item
          v-for="link in appLinks"
          :key="link.name"
          clickable
          v-ripple
          :to="link.path"
          exact
          exact-active-class
        >
          <q-item-section>
            <q-icon size="md" color="green-2" :name="link.icon" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
.q-drawer {
  background: rgba(0, 0, 0, 1);
  backdrop-filter: blur(4px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.q-header {
  background: white;
  backdrop-filter: blur(4px);
  border-bottom: 1px solid $green-1;

  .q-toolbar__title {
    font-weight: 600;
  }
}

.q-footer {
  background: white;
  border-color: $green-1;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.q-item__section--side {
  padding-right: 0;
  justify-content: center;
}

.q-item.q-router-link--exact,
.q-item.q-router-link--active {
  border-radius: $rounded-lg;
  color: $green-3 !important;

  .q-icon {
    color: $green-3 !important;
  }
}

.q-item:nth-child(2) {
  .q-icon {
    transform: rotate(45deg);
  }
}
</style>
