<template>
  <span
    class="variant"
    :class="{ selected: variant.selected }"
    @click="selectVariant(variant)"
  >
    <img
      :src="images[filename(variant.color_image)]"
      :alt="`Image color ${variant.color_image}`"
    />
    <span class="variant-name text-h6">{{ variant.name }}</span>
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
  flex-grow: 1;
  padding: 1rem;
}

.variant.selected {
  background: $black-primary;
  color: $white-primary;
}

img {
  border-radius: 100px;
  height: 2.5rem;
  margin-bottom: 1rem;
}

.variant-name {
  font-weight: 500;
}

.variant:not(.selected) .variant-name {
  opacity: 0.6;
}
</style>
