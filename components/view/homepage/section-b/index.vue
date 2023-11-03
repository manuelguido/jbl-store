<template>
  <div class="section-b" :class="{ hidden: optionsStore.getFullSize }">
    <div class="subsection">
      <h1 class="text-h1 text-black-primary">
        <span class="text-primary">JBL </span>{{ store.selectedProduct.name }}
      </h1>
    </div>
    <div class="subsection">
      <product-picker />
    </div>
    <div class="subsection">
      <color-picker />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useOptionsStore } from "@/store/options";
import { useProductsStore } from "@/store/jbl-products";
import colorPicker from "./color-picker/index.vue";
import productPicker from "./product-picker/index.vue";

const store = useProductsStore();
const optionsStore = useOptionsStore();
</script>

<style lang="scss" scoped>
.section-b {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  box-sizing: border-box;
  transition: 0.5s all;

  @media screen and (max-width: 992px) {
    width: 100dvw;
    padding: 2rem;
  }
}

@media screen and (min-width: 992px) {
  .section-b:not(.hidden) {
    height: 100dvh;
    padding: 2rem; // Adjusted padding for larger screens
    width: 40dvw;
  }
  .section-b.hidden {
    width: 0;
  }
}

.subsection {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
}
</style>
