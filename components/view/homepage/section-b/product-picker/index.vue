<template>
  <div class="product-picker">
    <h5 class="text-h5">{{ title }}</h5>

    <div class="product-container">
      <product-picker-variant
        v-for="(product, i) in store.getProducts"
        :key="i"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/jbl-products";
import productPickerVariant from "./variant.vue";

const store = useProductsStore();
const title = "Pick your product";
</script>

<style scoped>
.product-picker {
  margin-bottom: 3rem;
}

.product-container {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>
