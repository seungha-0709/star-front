<template>
  <v-layout column justify-center align-center>
    <banner-slide></banner-slide>
    <move-site-search></move-site-search>
    <div class="flex-layout">
      <best-class-list></best-class-list>
      <new-cafe-resource></new-cafe-resource>
    </div>
    <div class="flex-layout">
      <star-talk-list></star-talk-list>
    </div>
  </v-layout>
</template>

<script>
  import bannerSlide from "../components/levelZero/bannerSlide.vue"
  import moveSiteSearch from "../components/levelZero/moveSiteSearch.vue"
  import bestClassList from "../components/levelZero/bestClassList.vue"
  import newCafeResource from "../components/levelZero/newCafeResource.vue"
  import starTalkList from "../components/levelZero/starTalkList.vue"

  export default {
    components: {
      "banner-slide": bannerSlide,
      "move-site-search": moveSiteSearch,
      "best-class-list": bestClassList,
      "new-cafe-resource": newCafeResource,
      "star-talk-list": starTalkList
    }
  }
</script>

<style scoped>
  .flex-layout {
    display: flex;
    width: 1240px;
    margin: 0 auto;
  }
</style>
