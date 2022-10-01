<template>
  <q-page>
    <div class="column masonry-container">
      <div class="flex-break hidden item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>

      <ChainTiers
        title="Information"
        :col-break="false"
        class="masonry-col item"
      >
        <InfoCardBase></InfoCardBase>
      </ChainTiers>
      <ChainTiers
        v-for="tier in productionChainsBase"
        :key="tier.tierName"
        :title="tier.tierName"
        :col-break="tier.colBreak"
        class="masonry-col item"
      >
        <div v-if="!tier.colBreak">
          <ProductionChain
            v-for="chain in tier.productionChains"
            :key="chain.productionChain"
            :production-chain="chain.productionChain"
            :chain-multiplier="chain.chainMultiplier"
            :mermaid-definition="chain.mermaidDefinition"
          ></ProductionChain>
        </div>
      </ChainTiers>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Production Chain Data
import { productionChainsBase } from './data/production-chains-base';

// Mermaid
import { initialiseMermaid } from 'composables/mermaid';

// Components
import ChainTiers from 'components/ChainTiers.vue';
import ProductionChain from 'components/ProductionChain.vue';
import InfoCardBase from 'components/InfoCardBase.vue';

initialiseMermaid();
</script>

<style lang="scss">
// Masonry Layout - 5 cols
$column: 5;

.flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}

@for $i from 1 through ($column - 1) {
  .masonry-container > .item:nth-child(#{$column}n + #{$i}) {
    order: #{$i};
  }
}

.masonry-container > .item:nth-child(#{$column}n) {
  order: #{$column};
}

.masonry-container {
  height: 6000px;

  .masonry-col {
    width: 1000px;
    padding: 1px;
  }
}
</style>
