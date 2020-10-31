<template>
  <div class="join-path">
    <div v-if="(this.joinPath = 4)" class="join-verification-page">
      <div>
        <basic-join-title
          title="회원가입"
          subtitle="본인인증"
          description="별별선생에 가입하시고"
        />
        <div class="join-verification-title">
          <p class="title-number">164,807</p>
          <p>명 강사/학원 등에 대한 정보를 확인하세요.</p>
        </div>
      </div>
      <div class="join-verification">
        <join-verification />
      </div>
    </div>
    <div v-if="(this.joinPath = 5)" class="join-information-page">
      <basic-join-title
        class="join-information-title"
        title="회원가입"
        subtitle="기본정보"
        description="별별선생에서 활동하실 아이디와 비밀번호, 닉네임 등의
      기본정보를 생성합니다."
      />
      <div class="join-information">
        <join-information />
      </div>
    </div>
    <div class="banner">
      <img src="/img/banner/invalid-name@2x.png" alt="배너이미지" />
    </div>
    <div class="button">
      <basic-button
        class="back-button"
        text="이전"
        width="160px"
        height="51px"
        borderRadius="31px"
        background-color="rgba(0,0,0,0)"
        fontWeight="normal"
        color="#212121"
        borderColor="#dfdfdf"
      />
      <basic-button
        text="다음"
        width="160px"
        height="51px"
        borderRadius="31px"
        backgroundColor="#3f60cc"
        fontWeight="normal"
      />
    </div>
    <copy-right />
  </div>
</template>
<script>
  import basicJoinTitle from "../../../components/common/join/basicJoinTitle.vue"
  import joinVerification from "../../../components/join/joinVerification.vue"
  import joinInformation from "../../../components/join/joinInformation.vue"
  import basicButton from "../../../components/common/basicButton.vue"
  import copyright from "../../../components/common/copyright"

  export default {
    layout: "contentOnly",
    data() {
      return {
        joinPath: 4
      }
    },
    components: {
      "basic-join-title": basicJoinTitle,
      "join-verification": joinVerification,
      "join-information": joinInformation,
      "basic-button": basicButton,
      "copy-right": copyright
    }
  }
</script>
<style scoped>
  .join-path {
    margin: 0 auto;
    height: 100%;
    text-align: center;
    padding: 85px 0 90px;
  }
  .join-path .join-verification-page .join-verification-title {
    display: flex;
    font-size: 20px;
    color: #666666;
    justify-content: center;
    margin-top: -8px;
  }

  .join-path .join-verification-page .title-number {
    font-weight: bold;
    color: #5e3fcc;
  }
  .join-path .join-verification-page .join-verification,
  .join-path .join-verification-page .join-information {
    margin-top: 40px;
  }
  .join-path .join-information-page .join-information-title {
    width: 350px;
  }

  .join-path .banner {
    margin-top: 16px;
  }
  .join-path .banner img {
    width: 600px;
    height: 120px;
  }
  .join-path .button {
    text-align: center;
    margin: 32px 0 96px;
  }
  .join-path .button:first-child {
    margin-right: 16px;
  }
</style>
