<template>
  <div class="row">
    <ChainTiers title="Building Materials">
      <ProductionChain
        :production-chain="
          productionChains.buildingMaterials[0].productionChain
        "
        :mermaid-definition="
          productionChains.buildingMaterials[0].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="
          productionChains.buildingMaterials[1].productionChain
        "
        :mermaid-definition="
          productionChains.buildingMaterials[1].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="
          productionChains.buildingMaterials[2].productionChain
        "
        :mermaid-definition="
          productionChains.buildingMaterials[2].mermaidDefinition
        "
      ></ProductionChain>
    </ChainTiers>

    <ChainTiers title="Farmers | Workers">
      <ProductionChain
        :production-chain="productionChains.farmersWorkers[0].productionChain"
        :mermaid-definition="
          productionChains.farmersWorkers[0].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="productionChains.farmersWorkers[1].productionChain"
        :mermaid-definition="
          productionChains.farmersWorkers[1].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="productionChains.farmersWorkers[2].productionChain"
        :mermaid-definition="
          productionChains.farmersWorkers[2].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="productionChains.farmersWorkers[3].productionChain"
        :mermaid-definition="
          productionChains.farmersWorkers[3].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="productionChains.farmersWorkers[4].productionChain"
        :mermaid-definition="
          productionChains.farmersWorkers[4].mermaidDefinition
        "
      ></ProductionChain>
      <ProductionChain
        :production-chain="productionChains.farmersWorkers[5].productionChain"
        :mermaid-definition="
          productionChains.farmersWorkers[5].mermaidDefinition
        "
      ></ProductionChain>
    </ChainTiers>

    <ChainTiers title="Engineers">
      <ProductionChain
        :production-chain="productionChains.engineers[0].productionChain"
        :mermaid-definition="productionChains.engineers[0].mermaidDefinition"
      ></ProductionChain>
    </ChainTiers>

    <ChainTiers title="Weapons">
      <ProductionChain
        :production-chain="productionChains.weapons[0].productionChain"
        :mermaid-definition="productionChains.weapons[0].mermaidDefinition"
      ></ProductionChain>
    </ChainTiers>
  </div>
</template>

<script setup lang="ts">
import { productionChains } from './production-chains';

// Components
import ChainTiers from 'components/ChainTiers.vue';
import ProductionChain from 'components/ProductionChain.vue';
</script>

<style lang="scss"></style>
