<template>
  <div ref="diagram"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import mermaid from 'mermaid';

// DOM Refs
const diagram = ref<HTMLInputElement | null>(null);

// Props
const props = defineProps<{
  productionChain: string;
  mermaidDefinition: string;
}>();

watchEffect(() => {
  if (diagram.value != null) {
    mermaid.render(
      props.productionChain,
      props.mermaidDefinition,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        diagram.value!.innerHTML = svgCode;
      }
    );
  }
});
</script>

<style lang="scss">
.icon-size {
  width: 40px;
  height: 40px;
}

.ratio-count {
  font-weight: bold;
  text-align: center;
}

.efficiency-perc {
  font-weight: bold;
  color: $green-9 !important;
}

.electricity-container {
  margin-bottom: -5px;
}

.electricity-icon {
  width: 22px;
  margin-bottom: -5px;
}

.icon-flex-row {
  display: flex;
  flex-direction: row;
}

.icon-flex-col {
  display: flex;
  flex-direction: column;
}
</style>
