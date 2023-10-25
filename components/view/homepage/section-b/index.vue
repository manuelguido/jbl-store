<template>
  <div class="section-b">
    <div class="subsection">
      <h1>Title</h1>
      <h2>Model</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-b {
  // Flexbox
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  height: 100dvh;
  padding: 2rem;
  width: 40dvw;
}

.subsection {
  // Flexbox
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
}
</style>
