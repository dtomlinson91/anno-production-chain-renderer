<template>
  <div class="text-right absolute chain-multiplier q-pr-lg q-pt-md">
    <q-img src="~assets/productionChainMultiplier.svg" width="60px"></q-img>
    {{ chainMultiplier }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  chainMultiplier: string;
}>();
</script>

<style lang="scss">
.chain-multiplier {
  font-size: 2.5rem;
  font-weight: bold;
  right: 0;
}
</style>
