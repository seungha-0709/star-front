<template>
  <div class="join-select-page">
    <div class="join-select-title">
      <basic-join-title
        title="별별선생"
        subtitle="회원가입"
        description="본인이 해당하시는 가입 유형을 아래에서 선택해주세요."
      />
    </div>
    <div class="join-select-group">
      <join-select />
    </div>
    <div class="sign-in">
      <p>이미 계정이 있으신가요?</p>
      <button>로그인</button>
    </div>
    <copy-right class="copyright" />
  </div>
</template>
<script>
  import basicJoinTitle from "../../../components/common/join/basicJoinTitle"
  import joinSelect from "../../../components/join/joinSelect"
  import copyright from "../../../components/common/copyright"
  export default {
    layout: "contentOnly",
    components: {
      "basic-join-title": basicJoinTitle,
      "join-select": joinSelect,
      "copy-right": copyright
    }
  }
</script>
<style scoped>
  .join-select-page {
    margin: 0 auto;
    height: 100%;
  }
  .join-select-page .join-select-title {
    margin-top: 85px;
  }
  .join-select-page .join-select-group {
    margin-top: 53px;
  }
  .join-select-page .sign-in {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: normal;
    margin: 40px 0 96px;
  }
  .join-select-page .sign-in p {
    color: #212121;
    margin-right: 8px;
  }
  .join-select-page .sign-in button {
    color: #3f60cc;
  }
  /* 반응형 구현 */
  @media screen and (max-width: 1199px) {
    .join-select-page {
      margin: 0 auto;
      height: 100%;
      justify-content: center;
    }
    .join-select-page .join-select-title {
      margin-top: 0px;
    }
    .join-select-page .join-select-group {
      margin-top: 0px;
    }
    .join-select-page .sign-in {
      display: flex;
      font-size: 16px;
      font-weight: normal;
      margin: 146px 0;
    }
    .join-select-page .sign-in p {
      color: #666666;
      margin-right: 8px;
    }
    .join-select-page .copyright {
      display: none;
    }
  }
</style>
