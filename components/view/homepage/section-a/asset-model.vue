<template>
  <model-viewer
    :src="store.selectedProductVariant.asset"
    ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
    alt="A 3D model of an astronaut"
    ar
    auto-rotate
    camera-controls
  ></model-viewer>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/jbl-products";

const store = useProductsStore();
</script>

<style scoped>
model-viewer {
  width: 100%;
}

@media screen and (min-width: 992px) {
  model-viewer {
    height: 100dvh;
  }
}

@media screen and (max-width: 992px) {
  model-viewer {
    height: 70dvh;
  }
}
</style>
