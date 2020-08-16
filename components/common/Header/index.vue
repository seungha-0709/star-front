<template>
  <header>
    <div class="header-wrap">
      <div class="logo">
        <img src alt="로고" />
      </div>
      <global-nav-bar></global-nav-bar>
      <btn-link-store></btn-link-store>
    </div>
  </header>
</template>

<script>
import gnbVue from "./gnb.vue"
import StoreButtonVue from "./StoreButton.vue"

export default {
  data() {
    return {}
  },
  components: {
    "global-nav-bar": gnbVue,
    "btn-link-store": StoreButtonVue
  }
}
</script>

<style scoped>
header {
  height: 68px;
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
}
.header-wrap {
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
</style>
