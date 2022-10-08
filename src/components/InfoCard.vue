<template>
  <q-list separator class="big-font text-left">
    <slot></slot>
    <InfoCardItemWorld
      v-for="item in itemWorldData"
      :key="item.icon"
      v-bind="item"
    ></InfoCardItemWorld>
    <InfoCardItem
      v-for="item in itemData"
      :key="item.icon"
      v-bind="item"
    ></InfoCardItem>
  </q-list>
</template>

<script setup lang="ts">
import InfoCardItem from './InfoCard/InfoCardItem.vue';
import InfoCardItemWorld from './InfoCard/InfoCardItemWorld.vue';
import {
  InfoCardItem as InfoCardItemModel,
  InfoCardWorldItem as InfoCardWorldItemModel
} from 'pages/data/models';

defineProps<{
  itemData?: InfoCardItemModel[];
  itemWorldData?: InfoCardWorldItemModel[];
}>();
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
