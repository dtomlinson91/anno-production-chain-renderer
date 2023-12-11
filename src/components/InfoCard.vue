<template>
  <q-list separator class="big-font text-left">
    <slot></slot>
    <InfoCardItem
      v-for="item in infoCardItemData"
      :key="item.icon"
      v-bind="item"
    ></InfoCardItem>
    <InfoCardItemWorldIcon
      v-for="item in infoCardItemWorldData"
      :key="item.icon"
      v-bind="item"
    ></InfoCardItemWorldIcon>
  </q-list>
</template>

<script setup lang="ts">
import InfoCardItem from './InfoCard/InfoCardItem.vue';
import InfoCardItemWorldIcon from './InfoCard/InfoCardItemWorldIcon.vue';
import {
  InfoCardItem as InfoCardItemModel,
  InfoCardItemWorldIcon as InfoCardItemWorldIconModel
} from 'pages/data/models';

defineProps<{
  infoCardItemData?: InfoCardItemModel[];
  infoCardItemWorldData?: InfoCardItemWorldIconModel[];
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
