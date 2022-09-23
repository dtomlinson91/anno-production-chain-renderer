<template>
  <div class="row">
    <ChainTiers
      v-for="tier in productionChains"
      :key="tier.tierName"
      :title="tier.tierName"
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

<style lang="scss"></style>
