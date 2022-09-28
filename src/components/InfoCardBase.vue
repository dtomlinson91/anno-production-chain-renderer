<template>
  <q-list separator class="big-font text-left">
    <q-item>
      <q-item-section avatar>
        <q-img
          src="~assets/annoIcons/Furs.webp"
          class="info-icon"
        ></q-img> </q-item-section
      ><q-item-section
        ><span
          >Furs use Old World
          <q-img
            src="~assets/annoIcons/Icon_session_moderate_0.png"
            class="info-small-icon"
          ></q-img>
          production rates.
        </span></q-item-section
      >
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-img
          src="~assets/annoIcons/Clay.webp"
          class="info-icon"
        ></q-img></q-item-section
      ><q-item-section
        ><span
          >Clay uses Old World
          <q-img
            src="~assets/annoIcons/Icon_session_moderate_0.png"
            class="info-small-icon"
          ></q-img>
          production rates.
        </span></q-item-section
      >
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-img
          src="~assets/annoIcons/Gold_Ore.webp"
          class="info-icon"
        ></q-img></q-item-section
      ><q-item-section
        ><span
          >Gold mines use New World
          <q-img
            src="~assets/annoIcons/Icon_session_southamerica_0.png"
            class="info-small-icon"
          ></q-img>
          production rates.</span
        ></q-item-section
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

.info-small-icon {
  width: 50px;
}
</style>
