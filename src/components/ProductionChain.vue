<template>
  <div ref="diagram"></div>
  <q-separator inset class="q-mb-sm" />
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
  width: 100px;
  height: 100px;
}

.ratio-count {
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
}

.efficiency-perc {
  font-weight: bold;
  font-size: 2.5rem;
  color: $green-9 !important;
}

.electricity-container {
  margin-bottom: -5px;
}

.electricity-icon {
  width: 50px;
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
