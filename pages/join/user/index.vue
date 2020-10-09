<template>
  <div class="join-user-page">
    <div class="join-user-title">
      <basic-join-title
        title="별별선생"
        subtitle="회원가입"
        description="가입방법을 선택해주세요."
      />
    </div>
    <div class="join-user-group">
      <join-user />
    </div>
    <div class="sign-in">
      <p>이미 계정이 있으신가요?</p>
      <button>로그인</button>
    </div>
    <copy-right class="copyright" />
  </div>
</template>
<script>
  import copyright from "../../../components/common/copyright"
  import basicJoinTitle from "../../../components/common/join/basicJoinTitle"
  import joinUser from "../../../components/join/joinUser"
  export default {
    layout: "contentOnly",
    components: {
      "basic-join-title": basicJoinTitle,
      "join-user": joinUser,
      "copy-right": copyright
    }
  }
</script>
<style scoped>
  .join-user-page {
    margin: 0 auto;
    height: 100%;
  }
  .join-user-page .join-user-title {
    margin-top: 85px;
  }
  .join-user-page .join-user-group {
    margin-top: 53px;
  }
  .join-user-page .sign-in {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: normal;
    margin: 40px 0 96px;
  }
  .join-user-page .sign-in p {
    color: #212121;
    margin-right: 8px;
  }
  .join-user-page .sign-in button {
    color: #3f60cc;
  }
  /* 반응형 구현 */
  @media screen and (max-width: 1199px) {
    .join-user-page {
      margin: 0 auto;
      height: 100%;
      justify-content: center;
    }
    .join-user-page .join-user-title {
      margin-top: 0px;
    }
    .join-user-page .join-user-group {
      margin-top: 0px;
    }
    .join-user-page .sign-in {
      display: flex;
      font-size: 16px;
      font-weight: normal;
      margin: 146px 0;
    }
    .join-user-page .sign-in p {
      color: #666666;
      margin-right: 8px;
    }
    .join-user-page .copyright {
      display: none;
    }
  }
</style>
