<template>
  <div>
    <h5 class="text-h5">{{ title }}</h5>

    <div class="variant-container">
      <color-picker-variant
        v-for="(variant, i) in store.selectedProduct.variants"
        :key="i"
        :variant="variant"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/jbl-products";
import colorPickerVariant from "./variant.vue";

const store = useProductsStore();
const title = "Select your style";
</script>

<style scoped>
.variant-container {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>
