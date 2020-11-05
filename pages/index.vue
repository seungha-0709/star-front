<template>
  <v-layout column justify-center align-center>
    <banner-slide></banner-slide>
    <move-site-search></move-site-search>
    <div class="flex-layout">
      <best-class-list></best-class-list>
      <new-cafe-resource></new-cafe-resource>
    </div>
    <div class="center-banner"></div>
    <div class="flex-layout">
      <star-talk-list></star-talk-list>
      <star-info-list></star-info-list>
    </div>
  </v-layout>
</template>

<script>
  import bannerSlide from "../components/levelZero/bannerSlide.vue"
  import moveSiteSearch from "../components/levelZero/moveSiteSearch.vue"
  import bestClassList from "../components/levelZero/bestClassList.vue"
  import newCafeResource from "../components/levelZero/newCafeResource.vue"
  import starTalkList from "../components/levelZero/starTalkList.vue"
  import starInfoList from "../components/levelZero/starInfoList.vue"

  export default {
    components: {
      "banner-slide": bannerSlide,
      "move-site-search": moveSiteSearch,
      "best-class-list": bestClassList,
      "new-cafe-resource": newCafeResource,
      "star-talk-list": starTalkList,
      "star-info-list": starInfoList
    }
  }
</script>

<style scoped>
  .flex-layout {
    display: flex;
    width: 1240px;
    margin: 0 auto;
  }
  .center-banner {
    width: 100%;
    height: 240px;
    background-color: #c7c0c0;
    margin: 120px 0;
  }
</style>
