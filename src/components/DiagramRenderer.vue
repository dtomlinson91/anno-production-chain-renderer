<template>
  <div class="column masonry-container">
    <div class="flex-break hidden item"></div>
    <div class="flex-break item"></div>
    <div class="flex-break item"></div>
    <div class="flex-break item"></div>
    <div class="flex-break item"></div>

    <ChainTiers
      v-for="tier in productionChains"
      :key="tier.tierName"
      :title="tier.tierName"
      class="masonry-col item"
    >
      <ProductionChain
        v-for="chain in tier.productionChains"
        :key="chain.productionChain"
        :production-chain="chain.productionChain"
        :mermaid-definition="chain.mermaidDefinition"
      ></ProductionChain>
    </ChainTiers>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import mermaid from 'mermaid';

// Production Chain Data
import { productionChains } from './production-chains';

// Components
import ChainTiers from 'components/ChainTiers.vue';
import ProductionChain from 'components/ProductionChain.vue';

onMounted(() => {
  mermaid.initialize({
    startOnLoad: false,
    logLevel: 'fatal',
    securityLevel: 'loose',
    theme: 'neutral',
    flowchart: { htmlLabels: true }
  });
});
</script>

<style lang="scss">
// Masonry Layout
.flex-break {
  flex: 1 0 100% !important;
  width: 0 !important;
}
$x: 5;

@for $i from 1 through ($x - 1) {
  .masonry-container > .item:nth-child(#{$x}n + #{$i}) {
    order: #{$i};
  }
}

.masonry-container > .item:nth-child(#{$x}n) {
  order: #{$x};
}

.masonry-container {
  height: 10000px;

  .masonry-col {
    width: 1000px;
    padding: 1px;
  }
}

.top-padding {
  padding-top: 100px;
}

rect.label-container {
  fill: $burnt !important;
}
</style>
