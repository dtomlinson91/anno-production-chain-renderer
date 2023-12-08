<template>
  <q-page class="custom-width">
    <div class="column masonry-container">
      <div class="flex-break hidden item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <div class="flex-break item"></div>
      <ChainTiers
        :title="expansionInfoItem.title"
        :col-break="false"
        class="masonry-col item"
      >
        <InfoCard
          :item-data="itemDataBase"
          :item-world-data="worldItemDataBase"
        >
          <InfoCardItem v-bind="expansionInfoItem"></InfoCardItem>
        </InfoCard>
      </ChainTiers>
      <ChainTiers
        v-for="tier in productionChainsSeason4"
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
import { productionChainsSeason4 } from './data/production-chains-season-4';

// Info Card Data
import { itemDataBase, worldItemDataBase } from 'src/pages/data/info-card';

// Icons
import * as icons from './data/icons';

// Mermaid
import { initialiseMermaid } from 'composables/mermaid';

initialiseMermaid();
const expansionInfoItem = ref({
  title: 'Season 4',
  icon: icons.newWorldRisingIcon,
  text: 'All chains for Season 4 (Seeds of Change, Empire of the Skies & New World Rising).'
});
</script>

<style lang="scss">
// Masonry Layout - 5 cols
$column: 4;

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
  height: 7650px;

  .masonry-col {
    width: 1000px;
    padding: 1px;
  }
}

.custom-width {
  width: 4100px;
}
</style>
