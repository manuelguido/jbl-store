<template>
  <span class="variant" @click="selectVariant(variant)">
    <img
      :src="images[filename(variant.color_image)]"
      :alt="`Image color ${variant.color_image}`"
    />
    <span>{{ variant.name }}</span>
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { defineProps } from "vue";
import { filename } from "pathe/utils";
import type { ProductVariant } from "~/types/jbl-product";
import { useProductsStore } from "@/store/jbl-products";

const store = useProductsStore();

defineProps({
  variant: {
    type: Object as PropType<ProductVariant>,
    required: true,
  },
});

const glob = import.meta.glob("@/assets/image/*.png", { eager: true });
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]: [string, any]) => [
    filename(key),
    value.default,
  ])
);

function selectVariant(variant: ProductVariant) {
  store.setSelectedVariant(variant);
}
</script>

<style scoped>
.variant {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  border-radius: 100px;
  height: 2.5rem;
  margin-bottom: 0.25rem;
}
</style>
