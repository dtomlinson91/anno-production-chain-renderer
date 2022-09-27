<template>
  <q-list separator class="big-font text-left">
    <q-item>
      <q-item-section avatar>
        <q-img
          src="~assets/annoIcons/Gold_Ore.webp"
          class="info-icon"
        ></q-img> </q-item-section
      ><q-item-section
        >Mines & furs use Old World production rates.</q-item-section
      >
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-img src="~assets/electricityBorder.webp" class="info-icon"></q-img>
      </q-item-section>
      <q-item-section>Building has electricity</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.big-font {
  font-size: 2rem;
}

.info-icon {
  width: 100px;
}
</style>
