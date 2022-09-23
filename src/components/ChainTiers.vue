<template>
  <q-card
    flat
    bordered
    square
    :class="[getColWidth, 'bg-grey-3', 'q-ma-sm', 'border']"
  >
    <q-card-section>
      <div class="text-subtitle1 text-uppercase text-center">
        {{ title }}
      </div>
    </q-card-section>

    <q-separator inset class="q-mb-sm" />

    <slot></slot>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  colWidth: number;
}>();

const getColWidth = computed(() => {
  return `col-${props.colWidth}`;
});
</script>

<style lang="scss">
.border {
  border: 0.1rem solid $off-black;
}
</style>
