<template>
  <div class="join-path">
    <div v-if="(joinPath = 4)" class="join-verification-page">
      <div class="join-verification-title">
        <basic-join-title
          title="회원가입"
          subtitle="본인인증"
          description="별별선생에 가입하시고"
        />
        <div class="join-title">
          <p class="number">164,807</p>
          <p>명 강사/학원 등에 대한 정보를 확인하세요.</p>
        </div>
      </div>
      <div class="join-verification-group">
        <join-verification />
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
    </div>
    <div v-if="(joinPath = 5)" class="join-information-page">
      <join-information />
    </div>
    <copy-right class="copyright" />
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
        joinpath: 4
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
  }
  .join-verification-page .join-verification-title {
    margin-top: 85px;
  }
  .join-verification-title .join-title {
    display: flex;
    font-size: 20px;
    color: #666666;
    justify-content: center;
    margin-top: -8px;
  }
  .join-verification-page .banner {
    margin-top: 16px;
  }
  .join-verification-page .banner img {
    width: 600px;
    height: 120px;
  }
  .join-verification-page .button .back-button {
    margin-right: 16px;
  }
  .join-verification-title .number {
    font-weight: bold;
    color: #5e3fcc;
  }
  .join-verification-page .join-verification-group {
    margin-top: 40px;
  }
  .join-verification-page .button {
    text-align: center;
    margin: 32px 0 96px;
  }
  .join-verification-page .copyright {
    margin-bottom: 88px;
  }
</style>
