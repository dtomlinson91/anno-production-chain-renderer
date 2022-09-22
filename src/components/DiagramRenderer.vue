<template>
  <div>
    <q-card flat bordered>
      <q-card-section>
        <div class="text-subtitle1 text-uppercase text-center">
          Farmers | Workers
        </div>
      </q-card-section>

      <q-separator inset class="q-mb-sm" />

      <div ref="timber"></div>
      <div ref="steelBeams"></div>
      <div ref="highWheeler"></div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import mermaid from 'mermaid';
import { onMounted, ref, watchEffect } from 'vue';

// Icons
import woodIcon from '../assets/annoIcons/Wood.webp';
import timberIcon from '../assets/annoIcons/Timber.webp';
import charcoalKilnIcon from '../assets/annoIcons/Charcoal_kiln.webp';
import coalIcon from '../assets/annoIcons/Coal.webp';
import caoutchoucIcon from '../assets/annoIcons/Caoutchouc.webp';
import highWheelerIcon from '../assets/annoIcons/High_wheeler.webp';
import ironIcon from '../assets/annoIcons/Iron.webp';
import steelIcon from '../assets/annoIcons/Steel.webp';
import steelBeamsIcon from '../assets/annoIcons/Steel_beams.webp';
import lightningIcon from '../assets/annoIcons/Lightning.png';

// variables
const timber = ref<HTMLInputElement | null>(null);
const steelBeams = ref<HTMLInputElement | null>(null);
const highWheeler = ref<HTMLInputElement | null>(null);

// load mermaid graph
onMounted(() => {
  mermaid.initialize({
    startOnLoad: false,
    logLevel: 'fatal',
    securityLevel: 'loose',
    theme: 'neutral',
    flowchart: { htmlLabels: true }
  });
});

watchEffect(() => {
  if (timber.value != null) {
    mermaid.render(
      'timber',
      `flowchart LR; Wood(<img src='${woodIcon}' class='icon-size' /><span class='ratio-count'>1</span>)-->Timber(<img src='${timberIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        timber.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (steelBeams.value != null) {
    mermaid.render(
      'steelBeams',
      `flowchart LR; CharcoalKiln(<img src='${charcoalKilnIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Iron(<img src='${ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Steel(<span class='icon-flex-row'><img src='${steelIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span class='efficiency-perc'>66%</span><span class='ratio-count'>1</span></span></span>) --> SteelBeams(<img src='${steelBeamsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        steelBeams.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (highWheeler.value != null) {
    mermaid.render(
      'highWheeler',
      `flowchart LR; Iron(<img src='${ironIcon}' class='icon-size' /><span class='ratio-count'>1</span>) & Coal(<img src='${coalIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Steel(<img src='${steelIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> HighWheeler(<span class='icon-flex-row'><img src='${highWheelerIcon}' class='icon-size' /><span class='icon-flex-col q-pl-sm'><span><img src='${lightningIcon}' class='electricity-icon' /></span><span class='ratio-count'>1</span></span></span>); Caoutchouc(<img src='${caoutchoucIcon}' class='icon-size' /><span class='ratio-count'>4</span>) --> HighWheeler`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        highWheeler.value!.innerHTML = svgCode;
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
