<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { appLinks } from "../constants/links";

const route = useRoute();
const left = ref(false);
const pageName = ref(route.meta.name);

const toggleLeftDrawer = () => {
  left.value = !left.value;
};

watchEffect(() => {
  pageName.value = route.meta.name;
});
</script>

<template>
  <q-layout
    view="lHh LpR lFf"
    :class="[route.name === 'quran_detail' ? 'bg-secondary' : 'mosque-bg']"
  >
    <q-header class="text-white">
      <q-toolbar>
        <q-btn
          class="gt-xs"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="absolute-center text-h6">
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
    <q-footer bordered class="text-dark lt-sm">
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
            <q-icon size="md" color="grey-5" :name="link.icon" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
.q-drawer {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.mosque-bg {
  background: url("../assets/img/mosque.png") center bottom no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (min-width: 767px) {
    background: url("../assets/img/desk1.jpg") center bottom no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  @supports (-webkit-overflow-scrolling: touch) {
    .mosque-bg {
      background-attachment: fixed;
    }
  }
}

.q-header {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.q-footer {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
}

.q-item__section--side {
  padding-right: 0;
  justify-content: center;
}

.q-item.q-router-link--exact,
.q-item.q-router-link--active {
  background: $secondary;
  border-radius: 10px;
  font-weight: 500;
  color: #fff !important;

  .q-icon {
    color: white !important;
  }
}

.q-item:nth-child(2) {
  .q-icon {
    transform: rotate(45deg);
  }
}
</style>
