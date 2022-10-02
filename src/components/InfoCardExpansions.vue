<template>
  <q-list separator class="big-font text-left">
    <InfoCardItem
      v-for="item in itemDataExpansions"
      :key="item.id"
      v-bind="item"
    ></InfoCardItem>
  </q-list>
</template>

<script setup lang="ts">
import InfoCardItem from './InfoCard/InfoCardItem.vue';
import { itemDataExpansions } from 'src/pages/data/info-card';
</script>

<style lang="scss">
.big-font {
  font-size: 2rem;
}

.info-icon {
  width: 100px;
}

.info-small-icon {
  width: 50px;
}
</style>
