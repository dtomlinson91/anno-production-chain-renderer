<template>
  <q-item>
    <q-item-section avatar>
      <q-img :src="icon" class="info-icon"></q-img>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ text }}</q-item-label>
      <q-item-label>{{ additionalText }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
// Props
defineProps<{
  icon: string;
  text: string;
  additionalText?: string;
}>();
</script>
