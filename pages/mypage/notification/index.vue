<template>
  <div class="notification-page">
    <div class="my-shopping-cast">
      <my-shopping-cast />
    </div>
    <div class="notification">
      <!-- <notification-content /> -->
    </div>
  </div>
</template>
<script>
  import myShoppingCast from "../../../components/common/myShoppingCast.vue"
  // 나의 쇼핑 메뉴 테이블 공통 캄포넌트
  import notificationContents from "../../../components/myPage/notificationContents"
  // 나의 쇼핑 메뉴 중 알림 테이블 콘텐츠 컴포넌트
  import { notificationLists } from "../../../components/myPage/notificationLists.js"
  // 알림 list data
  export default {
    data() {
      return {
        notificationLists
      }
    },
    components: {
      "notification-content": notificationContents,
      "my-shopping-cast": myShoppingCast,
      "notification-lists": notificationLists
    }
  }
</script>
<style scoped>
  .notification-page .notification {
    display: block;
  }
  .notification-page .my-shopping-cast {
    margin: 32px 0 0 16px;
  }
</style>
