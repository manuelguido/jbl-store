<template>
  <div class="section-a">
    <div class="logo-container">
      <AppLogo />
    </div>
    <div class="subsection"><asset-model /></div>
  </div>
</template>

<script setup lang="ts">
import assetModel from "./asset-model.vue";
</script>

<style lang="scss" scoped>
.section-a {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  height: 100dvh;
  width: 60dvw;
}

.logo-container {
  left: 0;
  position: absolute;
  padding: 2rem 0 0 2rem;
  top: 0;
  width: 100%;
  z-index: 1080;
}

.subsection {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
