<template>
  <footer class="footer text-h7">
    <span>
      <span> Developed by </span>
      <a href="https://manuelguido.dev" target="_blank"> Manuel Guido </a>
    </span>
    <span>
      <span> Link to </span>
      <a href="https://github.com/manuelguido/jbl-store" target="_blank">
        repository
      </a>
    </span>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables/index.scss";

.footer {
  align-items: center;
  background: #f9f9f9;
  border-top: 1px solid #f3f3f3;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  position: absolute;
  width: 100%;
  z-index: 1080;
}

a {
  color: $primary;
  text-decoration: none;
}
</style>
