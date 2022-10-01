<template>
  <q-item>
    <q-item-section avatar>
      <q-img :src="icon" class="info-icon"></q-img>
    </q-item-section>
    <q-item-section>
      <span>
        {{ text }}
        <q-img :src="worldIcon" class="info-small-icon"></q-img>
        production rates.
      </span>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
// Props
defineProps<{
  icon: string;
  worldIcon: string;
  text: string;
}>();
</script>
