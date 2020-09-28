<template>
  <div class="notification-page">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div class="basic-board-cast">
      <basic-board-cast
        title="알림"
        :tableColumnWidth="tableColumnWidth"
        :tableHeader="notificationHeaderList"
        :tableList="notificationLists"
        :blockSize="5"
      />
    </div>
  </div>
</template>
<script>
  // 나의 쇼핑 메뉴 테이블 공통 캄포넌트
  import basicBoardCast from "../../../components/common/basicBoardCast.vue"
  // 사이드바 메뉴 컴포넌트 입시 import
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal.vue"
  // 알림 list data
  import { notificationLists } from "../../../components/myPage/notificationLists.js"
  import { myNoticeInfo } from "../../../components/myPageBoard"

  export default {
    data() {
      return {
        tableColumnWidth: myNoticeInfo.tableColumnWidth,
        notificationHeaderList: myNoticeInfo.thTitle,
        notificationLists
      }
    },
    components: {
      "basic-board-cast": basicBoardCast,
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
  .notification-page .basic-board-cast {
    display: inline-block;
    margin: 32px 0 0 16px;
  }
</style>
