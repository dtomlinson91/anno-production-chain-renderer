<template>
  <q-page class="custom-width">
    <div class="box-container">
      <div class="column masonry-container box-border">
        <div class="flex-break hidden item"></div>
        <div class="flex-break item"></div>
        <div class="flex-break item"></div>
        <ChainTiers
          :title="expansionInfoItem.title"
          :col-break="false"
          :leading-separator="false"
          class="masonry-col item"
        >
          <InfoCard
            :info-card-item-data="miscItemData"
            :info-card-item-world-data="miscItemWorldData"
          >
            <InfoCardItem v-bind="expansionInfoItem"></InfoCardItem>
          </InfoCard>
        </ChainTiers>
        <ChainTiers
          v-for="tier in productionChainsMisc"
          :key="tier.tierName"
          :title="tier.tierName"
          :col-break="tier.colBreak"
          :leading-separator="true"
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
import { productionChainsMisc } from './data/production-chains-misc';

// Info Card Data
import { miscItemData, miscItemWorldData } from 'src/pages/data/info-card';

// Icons
import * as icons from './data/icons';

// Mermaid
import { initialiseMermaid } from 'composables/mermaid';

initialiseMermaid();
const expansionInfoItem = ref({
  title: 'ratios | fuel | materials',
  icon: icons.siteLogoIcon,
  text: 'All chains for building materials, electricity, fuel and ratios.',
});
</script>

<style lang="scss">
// Masonry Layout - 5 cols
$column: 3;

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
  height: 4640px;

  .masonry-col {
    width: 1000px;
    padding: 1px;
  }

  padding: 10px;
}

.custom-width {
  width: 3140px;
}
</style>
