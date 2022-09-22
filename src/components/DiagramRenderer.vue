<template>
  <div class="row">
    <q-card flat bordered square class="col-2 bg-grey-3">
      <q-card-section>
        <div class="text-subtitle1 text-uppercase text-center">
          Building Materials
        </div>
      </q-card-section>

      <q-separator inset class="q-mb-sm" />

      <div ref="timber"></div>
      <div ref="bricks"></div>
      <div ref="steelBeams"></div>
    </q-card>
    <q-card flat bordered square class="col-2 bg-grey-3">
      <q-card-section>
        <div class="text-subtitle1 text-uppercase text-center">
          Farmers | Workers
        </div>
      </q-card-section>

      <q-separator inset class="q-mb-sm" />

      <div ref="schnapps"></div>
      <div ref="workClothes"></div>
      <div ref="sausages"></div>
      <div ref="bread"></div>
    </q-card>
    <q-card flat bordered square class="col-2 bg-grey-3">
      <q-card-section>
        <div class="text-subtitle1 text-uppercase text-center">Engineers</div>
      </q-card-section>

      <q-separator inset class="q-mb-sm" />

      <div ref="highWheeler"></div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import mermaid from 'mermaid';
import { onMounted, ref, watchEffect } from 'vue';

// Icons
import lightningIcon from '../assets/annoIcons/Lightning.png';

// Building Materials Icons
import woodIcon from '../assets/annoIcons/Wood.webp';
import timberIcon from '../assets/annoIcons/Timber.webp';
import clayIcon from '../assets/annoIcons/Clay.webp';
import bricksIcon from '../assets/annoIcons/Bricks.webp';
import charcoalKilnIcon from '../assets/annoIcons/Charcoal_kiln.webp';
import coalIcon from '../assets/annoIcons/Coal.webp';
import ironIcon from '../assets/annoIcons/Iron.webp';
import steelIcon from '../assets/annoIcons/Steel.webp';
import steelBeamsIcon from '../assets/annoIcons/Steel_beams.webp';

// Farmers & Workers Icons
import potatoIcon from '../assets/annoIcons/Potato.webp';
import schnappsIcon from '../assets/annoIcons/Schnapps.webp';
import woolIcon from '../assets/annoIcons/Wool.webp';
import workClothesIcon from '../assets/annoIcons/Work_clothes.webp';
import pigIcon from '../assets/annoIcons/Pigs.webp';
import sausageIcon from '../assets/annoIcons/Sausages.webp';
import grainIcon from '../assets/annoIcons/Grain.webp';
import flourIcon from '../assets/annoIcons/Flour.webp';
import breadIcon from '../assets/annoIcons/Bread.webp';

//
import caoutchoucIcon from '../assets/annoIcons/Caoutchouc.webp';
import highWheelerIcon from '../assets/annoIcons/High_wheeler.webp';

// HTML Refs
const timber = ref<HTMLInputElement | null>(null);
const steelBeams = ref<HTMLInputElement | null>(null);
const schnapps = ref<HTMLInputElement | null>(null);
const workClothes = ref<HTMLInputElement | null>(null);
const bricks = ref<HTMLInputElement | null>(null);
const sausages = ref<HTMLInputElement | null>(null);
const bread = ref<HTMLInputElement | null>(null);

const highWheeler = ref<HTMLInputElement | null>(null);

// Initalise mermaid
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
  if (bricks.value != null) {
    mermaid.render(
      'bricks',
      `flowchart LR; Clay(<img src='${clayIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Bricks(<img src='${bricksIcon}' class='icon-size' /><span class='ratio-count'>2</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        bricks.value!.innerHTML = svgCode;
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
  if (schnapps.value != null) {
    mermaid.render(
      'schnapps',
      `flowchart LR; Potato(<img src='${potatoIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Schnapps(<img src='${schnappsIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        schnapps.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (workClothes.value != null) {
    mermaid.render(
      'workClothes',
      `flowchart LR; Wool(<img src='${woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> WorkClothes(<img src='${workClothesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        workClothes.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (workClothes.value != null) {
    mermaid.render(
      'workClothes',
      `flowchart LR; Wool(<img src='${woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> WorkClothes(<img src='${workClothesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        workClothes.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (workClothes.value != null) {
    mermaid.render(
      'workClothes',
      `flowchart LR; Wool(<img src='${woolIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> WorkClothes(<img src='${workClothesIcon}' class='icon-size' /><span class='ratio-count'>1</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        workClothes.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (sausages.value != null) {
    mermaid.render(
      'sausages',
      `flowchart LR; Pig(<img src='${pigIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Sausages(<img src='${sausageIcon}' class='icon-size' /><span class='ratio-count'>2</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        sausages.value!.innerHTML = svgCode;
      }
    );
  }
});

watchEffect(() => {
  if (bread.value != null) {
    mermaid.render(
      'bread',
      `flowchart LR; Grain(<img src='${grainIcon}' class='icon-size' /><span class='ratio-count'>2</span>) --> Flour(<img src='${flourIcon}' class='icon-size' /><span class='ratio-count'>1</span>) --> Bread(<img src='${breadIcon}' class='icon-size' /><span class='ratio-count'>2</span>)`,
      (svgCode: string) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        bread.value!.innerHTML = svgCode;
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
