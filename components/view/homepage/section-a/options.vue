<template>
  <div>
    <button class="toggle-button" @click="toggleSize()">See full size</button>
  </div>
</template>

<script lang="ts" setup>
import { useOptionsStore } from "@/store/options";

const store = useOptionsStore();

function toggleSize() {
  store.toggleSize();
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/index.scss";

.toggle-button {
  border: 1px solid rgba(255, 255, 255, 0.44);
  border-radius: 10px;
  color: $white-primary;
  cursor: pointer;
  padding: 1rem;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.7px);
  -webkit-backdrop-filter: blur(9.7px);
}
</style>
