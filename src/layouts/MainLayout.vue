<template>
  <q-layout view="lHh Lpr lFf" class="custom-width">
    <q-header>
      <q-toolbar class="border-black-bottom-med bg-white text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="off-black"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-off-black">
          Anno 1800 Production Chains
        </q-toolbar-title>

        <a
          href="https://github.com/dtomlinson91/anno-production-chain-renderer"
          class="no-link-border"
          ><q-icon name="lab la-github" color="off-black" size="2.2rem"></q-icon
        ></a>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="bg-grey-2" />
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
  width: 5100px;
}
</style>
