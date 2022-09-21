<template>
  <div ref="mermaidGraph"></div>
  <br />
  <div ref="imageGraph"></div>
</template>

<script setup lang="ts">
import mermaid from 'mermaid';
import { onMounted, ref, watchEffect } from 'vue';

// variables
const mermaidGraph = ref<HTMLInputElement | null>(null);
const imageGraph = ref<HTMLInputElement | null>(null);

// load mermaid graph
onMounted(() => {
  mermaid.initialize({
    startOnLoad: false,
    logLevel: 'fatal',
    securityLevel: 'loose',
    theme: 'neutral'
  });
});

watchEffect(() => {
  if (mermaidGraph.value != null) {
    mermaid.render(
      'test',
      "graph LR; Wood(<div class='wood-icon'><span>1</span></div>)-->Icon(<div class='timber-icon'>1</div>)",
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        mermaidGraph.value!.innerHTML = svgCode;
      }
    );
  } else {
    console.log('null value');
  }
});

watchEffect(() => {
  if (imageGraph.value != null) {
    mermaid.render(
      'woodTimber',
      "graph LR; Wood(<img src='/annoIcons/buildingMaterials/Wood.webp' class='icon-size' />)-->Icon(<img src='/annoIcons/buildingMaterials/Timber.webp' class='icon-size' />)",
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        imageGraph.value!.innerHTML = svgCode;
      }
    );
  } else {
    console.log('null value');
  }
});
</script>

<style lang="scss">
.icon-size {
  width: 40px;
  height: 40px;
}

.wood-icon {
  background: no-repeat center/100%
    url('../assets/annoIcons/buildingMaterials/Wood.webp');
  width: 40px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.timber-icon {
  background: no-repeat center/100%
    url('../assets/annoIcons/buildingMaterials/Timber.webp');
  width: 40px;
  height: 40px;
}
</style>
