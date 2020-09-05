<template>
  <div>
    <div class="my-page">
      <left-menu />
      <notification-content />
    </div>
  </div>
</template>
<script>
  import leftMenu from "../../components/myPage/leftMenu.vue"
  import notificationCast from "../../components/myPage/notificationCast"
  import notificationContents from "../../components/myPage/notificationContents.vue"
  export default {
    data() {
      return {}
    },
    components: {
      "left-menu": leftMenu,
      "notification-cast": notificationCast,
      "notification-content": notificationContents
    }
  }
</script>
<style scoped>
  .my-page {
    width: 1200px;
    margin: 32px auto 0;
    text-align: center;
  }
</style>
