<template>
  <div>
    <div class="my-page">
      <left-menu title="마이페이지" :menu="myPageMenu">
        <user-icon size="24" color="#dfdfdf" />
      </left-menu>
      <left-menu title="나의 쇼핑" :menu="myShoppingMenu">
        <shopping-bag-icon size="24" color="#dfdfdf" />
      </left-menu>
      <!-- <notification-content /> -->
    </div>
  </div>
</template>
<script>
  import leftMenu from "../../components/myPage/leftMenu.vue"
  import notificationCast from "../../components/myPage/notificationCast"
  import notificationContents from "../../components/myPage/notificationContents.vue"

  import { myPageMenu, myShoppingMenu } from "../../assets/data/sidebar"
  import { UserIcon, ShoppingBagIcon } from "vue-feather-icons"

  export default {
    data() {
      return {
        myPageMenu,
        myShoppingMenu
      }
    },
    components: {
      "left-menu": leftMenu,
      "notification-cast": notificationCast,
      "notification-content": notificationContents,
      UserIcon,
      ShoppingBagIcon
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
