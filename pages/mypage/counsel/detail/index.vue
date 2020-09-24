<template>
  <div class="counsel-detail-page">
    <div>
      <sidebar-temporal class="sidebar" />
    </div>
    <div>
      <div class="counsel-detail">
        <div class="store-counsel">
          <h4>스토어 1:1 문의</h4>
          <p>쇼핑몰 이용에 궁금하신 사항을 남겨주세요.</p>
        </div>

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
      <div class="counsel-answer">
        <div class="counsel">
          <div class="title">
            관리자의 답변내용
          </div>
          <div class="answer">
            안됩니다.^^
          </div>
        </div>
      </div>
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
  .counsel-detail .store-counsel {
    width: 100%;
    margin-bottom: 24px;
    border-bottom: solid 1px #666666;
  }
  .counsel-detail .store-counsel h4 {
    font-size: 24px;
    font-weight: bold;
    color: #212121;
  }
  .counsel-detail .store-counsel p {
    font-size: 14px;
    font-weight: normal;
    color: #666666;
    margin: 4px 0 16px;
  }
  .counsel-detail-page .counsel-answer {
    width: 924px;
    margin-top: 8px;
    padding: 32px 40px 40px;
    background-color: #ffffff;
    border: solid 1px #dfdfdf;
    color: #212121;
  }
  .counsel-answer .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  .counsel-answer .answer {
    font-size: 16px;
    font-weight: normal;
  }
</style>
