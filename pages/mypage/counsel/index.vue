<template>
  <div class="counsel-page">
    <div class="sidebar">
      <sidebar-temporal />
    </div>
    <div>
      <div class="basic-board-cast">
        <basic-board-cast
          title="스토어 1:1 문의"
          :tableColumnWidth="tableColumnWidth"
          :tableHeader="counselHeaderList"
          :tableList="counselData"
          :blockSize="5"
        />
      </div>
    </div>
  </div>
</template>
<script>
  // 나의 쇼핑 메뉴 테이블 공통 컴포넌트
  import basicBoardCast from "../../../components/common/basicBoardCast.vue"
  // 사이드바 메뉴 컴포넌트 입시 import
  import sidebarTemporal from "../../../components/myPage/sidebarTemporal.vue"
  // 문의 data
  import { counselData } from "../../../components/myPage/counselData.js"

  export default {
    data() {
      return {
        tableColumnWidth: [60, 120, 364, 160, 140],
        counselHeaderList: ["No.", "구분", "제목", "접수일시", "상태"],
        counselData
      }
    },
    components: {
      "basic-board-cast": basicBoardCast,
      "sidebar-temporal": sidebarTemporal,
      "counsel-data": counselData
    }
  }
</script>
<style scoped>
  .counsel-page {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .counsel-page .sidebar {
    display: inline-block;
  }
  .counsel-page .basic-board-cast {
    display: inline-block;
    margin: 32px 0 0 16px;
  }
</style>
