<template>
  <v-layout column justify-center align-center>
    <banner-slide></banner-slide>
    <move-site-search></move-site-search>
    컨텐츠 내용
    <div class="scroll-test">스크롤 영역</div>
  </v-layout>
</template>

<script>
  import bannerSlide from "../components/levelZero/bannerSlide"
  import moveSiteSearch from "../components/levelZero/moveSiteSearch"

  export default {
    components: {
      "banner-slide": bannerSlide,
      "move-site-search": moveSiteSearch
    }
  }
</script>

<style scoped>
  .scroll-test {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
  }
</style>
