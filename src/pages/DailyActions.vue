<script setup>
import { list } from "src/constants/checklist";
import BaseCard from "src/components/BaseCard.vue";
</script>

<template>
  <q-page class="q-pa-md">
    <base-card class="list">
      <div
        v-for="(item, n) in list"
        :key="n"
        class="flex justify-between items-center list-item"
      >
        <div class="flex items-center">
          <div class="list-item__checkbox q-mr-md">
            <span></span>
          </div>
          <div class="text-weight-medium">
            {{ item.title }}
            <div class="text-caption">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div class="list-item__time" v-if="item.time">
          {{ item.time }}
        </div>
      </div>
    </base-card>
  </q-page>
</template>

<style lang="scss">
.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }

  .list-item {
    padding: 16px;
    border-radius: 12px;
    border: 1px solid $grey-2;
    transition: all 0.2s linear;

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;
    }

    &__checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        border-radius: 4px;
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid $green-1;
      }
    }

    &__time {
      padding: 8px;
      background: $green-1;
      border-radius: 8px;
    }
  }
}
</style>
