<template>
  <q-card flat bordered square class="col-2 bg-grey-3 q-ma-sm border">
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
defineProps<{
  title: string;
}>();
</script>

<style lang="scss">
.border {
  border: 0.1rem solid #2e3f4e;
}
</style>
