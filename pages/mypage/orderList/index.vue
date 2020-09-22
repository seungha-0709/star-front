<template>
  <div class="my-page-wrap">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div class="my-page-content">
      <my-page-board
        :myPageBoardInfo="myOrderListInfo"
        :boardData="myClassList"
      >
        <order-list-main />
      </my-page-board>
    </div>
  </div>
</template>

<script>
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal"
  import myPageBoard from "../../../components/myClass/myPageBoard.vue"
  import orderListMain from "../../../components/orderList/orderListMain.vue"
  import { myClassList } from "../../../components/myClass/myClassList.js"
  import { myOrderListInfo } from "../../../components/myPageBoard.js"

  export default {
    data() {
      return {
        myClassList,
        myOrderListInfo
      }
    },
    components: {
      sidebarTemporal,
      myPageBoard,
      orderListMain
    }
  }
</script>

<style scoped>
  .my-page-wrap {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .sidebar {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
  .my-page-content {
    display: inline-block;
  }
</style>
