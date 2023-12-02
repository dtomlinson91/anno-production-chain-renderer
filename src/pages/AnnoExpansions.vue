<template>
  <q-page>
    <div class="column masonry-container">
      <div class="flex-break hidden item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <ChainTiers
        title="Information"
        class="masonry-col item"
        :col-break="false"
      >
        <InfoCard
          :item-data="itemDataExpansions"
          :item-world-data="worldItemDataExpansions"
        >
          <InfoCardItem v-bind="expansionInfoItem"></InfoCardItem>
        </InfoCard>
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
import { ref } from 'vue';

// Components
import ChainTiers from 'components/ChainTiers.vue';
import ProductionChain from 'components/ProductionChain.vue';
import InfoCard from 'components/InfoCard.vue';
import InfoCardItem from 'components/InfoCard/InfoCardItem.vue';

// Production Chain Data
import { productionChainsExpansions } from './data/production-chains-expansions';

// Info Card Data
import {
  itemDataExpansions,
  worldItemDataExpansions
} from 'src/pages/data/info-card';

// Icons
import * as icons from './data/icons';

// Mermaid
import { initialiseMermaid } from 'composables/mermaid';

initialiseMermaid();
const expansionInfoItem = ref({
  icon: icons.newWorldRisingIcon,
  text: 'All chains from Season 3 through Season 4.'
});
</script>

<style lang="scss">
// Masonry Layout - 5 cols
$columns: 6;

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
  height: 9100px;

  .masonry-col {
    width: 1000px;
    padding: 1px;
  }
}

</style>
