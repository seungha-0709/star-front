<template>
  <div class="counsel-detail-page">
    <sidebar-temporal class="sidebar" />
    <div class="counsel-detail">
      <basic-board-detail
        class="board-detail"
        type="취소/환불"
        title="취소하고싶은데 알려주세요"
        writer="궁금이"
        date="2019.02.07 17:30"
        counsel="강의를 들을 수 없게 되서 그런데 취소할 순 없을까요?
전액이 아니어도 부분 환불이라도 받고 싶은데 어떻게 하면되는지 알려주세요.
결제번호는 C12345678입니다."
      />
    </div>
  </div>
</template>
<script>
  import basicBoardDetail from "../../../../components/common/basicBoardDetail.vue"
  import sidebarTemporal from "../../../../components/myPage/sidebarTemporal.vue"
  export default {
    components: {
      "basic-board-detail": basicBoardDetail,
      "sidebar-temporal": sidebarTemporal
    }
  }
</script>
<style scoped>
  .counsel-detail-page {
    width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  .counsel-detail {
    width: 924px;
    margin-top: 32px;
    padding: 32px 40px 40px;
    background-color: #ffffff;
    border: solid 1px #dfdfdf;
  }
  .counsel-detail .board-detail {
    margin-bottom: 8px;
  }
</style>
