<template>
  <div class="notification-page">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div>
      <div class="my-shopping-cast">
        <my-shopping-cast
          title="알림"
          :tableColumnWidth="tableColumnWidth"
          :tableHeader="notificationHeaderList"
          :tableList="notificationLists"
        />
      </div>
    </div>
  </div>
</template>
<script>
  // 나의 쇼핑 메뉴 테이블 공통 캄포넌트
  import myShoppingCast from "../../../components/common/myShoppingCast.vue"
  // 알림 list data
  import { notificationLists } from "../../../components/myPage/notificationLists.js"
  // 사이드바 메뉴 컴포넌트 입시 import
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal.vue"

  export default {
    data() {
      return {
        tableColumnWidth: [60, 140, 364, 140, 140],
        notificationHeaderList: [
          "No.",
          "수신일시",
          "제목/내용",
          "발신자",
          "삭제"
        ],
        notificationLists
      }
    },
    components: {
      "my-shopping-cast": myShoppingCast,
      "notification-lists": notificationLists,
      "sidebar-temporal": sidebarTemporal
    }
  }
</script>
<style scoped>
  .notification-page {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .notification-page .sidebar {
    display: inline-block;
  }
  .notification-page .my-shopping-cast {
    display: inline-block;
    margin: 32px 0 0 16px;
  }
</style>
