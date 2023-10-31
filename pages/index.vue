<template>
  <!-- Homepage -->
  <div class="homepage bg-white-primary">
    <view-homepage-section-a />
    <view-homepage-section-b />
  </div>
  <!-- /.Homepage -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  justify-content: space-between;
  height: 100dvh;
}
</style>
