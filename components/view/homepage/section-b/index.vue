<template>
  <div class="section-b">
    <div class="subsection">
      <h1 class="text-h1 text-black-primary">
        <span class="text-primary">JBL </span>{{ store.selectedProduct.name }}</h1>
    </div>
    <div class="subsection">
      <color-picker />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/jbl-products";
import colorPicker from "./color-picker/index.vue";

const store = useProductsStore();
</script>

<style lang="scss" scoped>
.section-b {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  box-sizing: border-box;
  height: 100dvh;
  padding: 2rem;
  width: 40dvw;
}

.subsection {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 !important;
}
</style>
