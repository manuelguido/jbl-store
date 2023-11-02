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
  min-height: 100dvh;
}

@media screen and (max-width: 992px) {
  .homepage {
    flex-direction: column;
  }
}

</style>
