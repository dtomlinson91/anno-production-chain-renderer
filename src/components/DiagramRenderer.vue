<template>
  <q-btn color="primary" label="Primary" @click="resizeAllGridItems" />
  <div class="grid-container">
    <ChainTiers
      v-for="tier in productionChains"
      :key="tier.tierName"
      :title="tier.tierName"
      :col-width="tier.width"
      class="grid-item"
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

function resizeAllGridItems() {
  console.log('resizing');
  //calculate the grid container with
  let _gridWidth = document.getElementsByClassName(
    'grid-container'
  )[0] as HTMLElement;
  /*calculate the grid item width (the width should be the same for all grid items
    because we used `repeat( auto-fit, minmax(22em , 1fr))` to generate our responsive
    columns)*/
  let gridWidth = _gridWidth.offsetWidth;

  let _gridItemWidth = document.getElementsByClassName(
    'grid-item'
  )[0] as HTMLElement;
  /*devide the with of the grid container by the with of the grid item item to get
    the number of generated columns*/
  let gridItemWidth = _gridItemWidth.offsetWidth;

  let columnsNumber = ~~(gridWidth / gridItemWidth);

  /*the second part of the algorithm with loop through all the generated grid items.
    Starting with the second row, the grid item in that row will be given a `margin
    -top` value that equals the height of the grid item situated right above it, minus
    the value of `grid-auto-rows`. This way whenever there's an extra space, the grid
    item below will have it's `margin-top` value adjusted to take the extra space.*/
  let x = columnsNumber;
  let colIdx = 0;
  let columnsHeights = [0, 0, 0];
  let tempColumnsHeights = [];
  let allItems = document.getElementsByClassName('grid-item');
  console.log(allItems);
  for (x; x < allItems.length; x++) {
    let _allItemsOffsetHeight = allItems[x - columnsNumber] as HTMLElement;
    let topItemHeight =
      columnsHeights[colIdx] + _allItemsOffsetHeight.offsetHeight;
    let tempAllItems = allItems[x] as HTMLElement;
    tempAllItems.style.marginTop = topItemHeight - 300 + 'px';
    tempColumnsHeights.push(topItemHeight - 300);
    colIdx++;

    /*move to the next row of grid items to adjust them if all the items of the
      previous row are adjusted*/
    if (colIdx === columnsNumber) {
      colIdx = 0;
      columnsHeights = tempColumnsHeights;
      tempColumnsHeights = [];
    }
  }
}

onMounted(() => {
  resizeAllGridItems();
});
</script>

<style lang="scss">
.grid-container {
  min-width: 70%;
  max-width: 100%;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(22em, 20%));
  grid-auto-rows: 300px;
}

.grid-item {
  height: fit-content;
  /*add the rest of your desired styling properties*/
}
</style>
