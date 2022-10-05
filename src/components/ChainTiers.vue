<template>
  <q-card
    flat
    bordered
    square
    :class="[
      'card-background',
      'q-ma-sm',
      'border',
      'text-center',
      calculateColBreak()
    ]"
  >
    <div v-if="!colBreak">
      <q-card-section>
        <div
          class="text-subtitle1 text-uppercase text-center title-font q-pa-md"
        >
          {{ title }}
        </div>
      </q-card-section>

      <q-separator inset class="q-mb-lg" />
    </div>

    <slot></slot>
  </q-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  colBreak: boolean;
}>();

const calculateColBreak = () => (props.colBreak ? 'hide-item' : '');
</script>

<style lang="scss">
.border {
  border: 0.2rem solid $burnt-dark;
}

.title-font {
  font-size: 3rem;
}

.hide-item {
  height: 0px;
  border: none;
  margin-bottom: -9.2px;
}
</style>
