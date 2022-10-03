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
        class="masonry-col item"
        :col-break="false"
      >
        <InfoCard :item-data="itemDataExpansions"></InfoCard>
      </ChainTiers>
      <ChainTiers
        v-for="tier in productionChainsExpansions"
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
import { productionChainsExpansions } from './data/production-chains-expansions';

// Info Card Data
import { itemDataExpansions } from 'src/pages/data/info-card';

// Mermaid
import { initialiseMermaid } from 'composables/mermaid';

// Components
import ChainTiers from 'components/ChainTiers.vue';
import ProductionChain from 'components/ProductionChain.vue';
import InfoCard from 'components/InfoCard.vue';

initialiseMermaid();
</script>

<style lang="scss">
// Masonry Layout - 5 cols
$columns: 5;

.flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}

@for $i from 1 through ($columns - 1) {
  .masonry-container > .item:nth-child(#{$columns}n + #{$i}) {
    order: #{$i};
  }
}

.masonry-container > .item:nth-child(#{$columns}n) {
  order: #{$columns};
}

.masonry-container {
  height: 10000px;

  .masonry-col {
    width: 1000px;
    padding: 1px;
  }
}
</style>
