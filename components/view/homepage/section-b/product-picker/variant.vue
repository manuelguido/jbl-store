<template>
  <span
    class="variant"
    :class="{ selected: product.selected }"
    @click="selectProduct(product)"
  >
    <img
      :src="images[filename(product.thumbnail)]"
      :alt="`JBL ${product.name} product`"
    />
    <span class="variant-name text-h6">{{ product.name }}</span>
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { defineProps } from "vue";
import { filename } from "pathe/utils";
import type { JBLProduct } from "~/types/jbl-product";
import { useProductsStore } from "@/store/jbl-products";

const store = useProductsStore();

defineProps({
  product: {
    type: Object as PropType<JBLProduct>,
    required: true,
  },
});

const glob = import.meta.glob("@/assets/image/product-thumbnails/*.webp", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]: [string, any]) => [
    filename(key),
    value.default,
  ])
);

function selectProduct(product: JBLProduct) {
  store.setSelectedProduct(product);
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/index.scss";

.variant {
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}

img {
  height: 6rem;
  margin-bottom: 1rem;
}

.variant-name {
  font-weight: 500;
}

.variant:not(.selected) .variant-name {
  opacity: 0.4;
}
</style>
