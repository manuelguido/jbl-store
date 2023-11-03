<template>
  <div class="section-a" :class="{ 'full-size': store.getFullSize }">
    <div class="logo-container">
      <AppLogo />
    </div>
    <div class="subsection">
      <asset-model />
    </div>
    <div class="subsection options">
      <options />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOptionsStore } from "@/store/options";
import assetModel from "./asset-model.vue";
import options from "./options.vue";

const store = useOptionsStore();
</script>

<style lang="scss" scoped>
.section-a {
  position: relative;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  transition: 0.5s all;
}

.logo-container,
.options {
  box-sizing: border-box;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1080;
}

.logo-container {
  top: 0;
  padding: 2rem 0 0 2rem;
}

.subsection {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  // height: 100%;
}

@media screen and (min-width: 992px) {
  .section-a {
    height: 100dvh;
  }

  .section-a:not(.full-size) {
    width: 50dvw;
  }

  .section-a.full-size {
    width: 100dvw;
  }

  .options {
    bottom: 0;
    padding: 2rem;
  }
}

@media screen and (max-width: 992px) {
  .section-a {
    width: 100dvw;
    height: 70dvh;
  }

  .options {
    display: none;
  }
}
</style>
