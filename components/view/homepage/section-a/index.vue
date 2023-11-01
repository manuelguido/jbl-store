<template>
  <div class="section-a">
    <div class="subsection">
      <AppLogo />
    </div>
    <div class="subsection"><asset-model /></div>
    <div class="subsection">Color selection</div>
  </div>
</template>

<script setup lang="ts">
import assetModel from "./asset-model.vue";
</script>

<style lang="scss" scoped>
.section-a {
  // Flex
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  background: #ffffff;
  box-sizing: border-box;
  height: 100dvh;
  padding: 2rem;
  width: 60dvw;
}

.subsection {
  display: flex;
  width: 100%;
}

.subsection:first-child {
  display: flex;
  justify-content: flex-start;
}

.subsection:not(:first-child) {
  justify-content: center;
}
</style>
