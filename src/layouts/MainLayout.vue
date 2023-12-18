<template>
  <q-layout view="lHh Lpr lFf" class="custom-width">
    <!--<q-layout view="lHh Lpr lFf" class="">-->
    <q-header :reveal="true" :reveal-offset="0">
      <q-toolbar class="toolbar-background text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="">
          Anno 1800 Production Chains
        </q-toolbar-title>

        <a
          href="https://github.com/dtomlinson91/anno-production-chain-renderer"
          class="no-link-border"
          ><q-icon name="lab la-github" color="white" size="2.2rem"></q-icon
        ></a>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="page-background">
      <q-list>
        <q-item-label header class="text-off-black text-subtitle1">
          Navigation
        </q-item-label>
        <q-separator inset class="q-mb-sm" />
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="page-background text-burnt" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import linksList from './data/linksList.json';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.border-black-bottom-med {
  border-bottom: 0.15rem solid $off-black;
}

.no-link-border {
  text-decoration: none;
}

.custom-width {
  width: 6100px;
}
</style>
