<template>
  <div>
    <h2>문의 유형</h2>
    <div class="qna-type">
      <span class="check-icon-box"
        ><check-icon size="1x" class="check-icon" /></span
      ><span class="qna-type-name">상품</span>
      <span class="check-icon-box"
        ><check-icon size="1x" class="check-icon" /></span
      ><span class="qna-type-name">배송</span>
      <span class="check-icon-box"
        ><check-icon size="1x" class="check-icon" /></span
      ><span class="qna-type-name">취소/환불</span>
      <span class="check-icon-box"
        ><check-icon size="1x" class="check-icon" /></span
      ><span class="qna-type-name">교환/변경</span>
      <span class="check-icon-box"
        ><check-icon size="1x" class="check-icon" /></span
      ><span class="qna-type-name">기타</span>
    </div>
    <h2>문의 제목</h2>
    <input type="text" placeholder="제목을 입력하세요" />
    <h2>문의 내용</h2>
    <input
      class="qna-content"
      type="text"
      placeholder="문의 내용을 입력하세요.
      상품의 경우 문의하실 상품번호, 주문번호 등을 함께
      기입해 주시면 더 정확하게 답변을 받으실 수 있습니다."
    />
  </div>
</template>

<script>
  import { CheckIcon } from "vue-feather-icons"

  export default {
    components: {
      CheckIcon
    }
  }
</script>

<style scoped>
  .qna-type {
    color: #212121;
    font-size: 16px;
    display: flex;
    margin-top: 12px;
  }
  .qna-type-name {
    margin-right: 16px;
  }
  h2 {
    font-size: 16px;
    color: #212121;
    font-weight: bold;
    margin-top: 40px;
  }
  h2:first-child {
    margin-top: 16px;
  }
  .check-icon-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #dfdfdf;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }
  .check-icon {
    color: #fff;
  }
  input {
    border: 1px solid #dfdfdf;
    padding: 11px 16px;
    width: 100%;
  }
  input::placeholder {
    color: #c1c1c1;
    font-size: 16px;
    font-weight: normal;
  }
  .qna-content {
    height: 166px;
  }
</style>
