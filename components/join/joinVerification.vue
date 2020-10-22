<template>
  <div class="join-verification">
    <div class="join-name">
      <basic-verification-info
        name="이름"
        type="text"
        placeholder="인증을 위하여 본인의 실명을 입력해 주세요."
      />
    </div>
    <div class="join-contact">
      <basic-verification-info
        name="휴대전화"
        width="367px"
        type="tel"
        placeholder="인증을 위해 휴대전화 번호를 입력해 주세요.(숫자만)"
      />
      <basic-button
        class="button"
        text="인증번호받기"
        width="137px"
        background-color="#ffffff"
        fontWeight="400"
        borderColor="#dfdfdf"
        borderRadius="0px"
        color="#212121"
      />
    </div>
    <div class="verification-confirm">
      <basic-verification-info
        width="367px"
        type="tel"
        placeholder="받으신 인증번호를 입력해 주세요."
      />
      <basic-button
        class="button"
        text="인증하기"
        width="137px"
        background-color="#ffffff"
        fontWeight="400"
        borderColor="#3f60cc"
        borderRadius="0px"
        color="#3f60cc"
      />
    </div>
    <div class="resend">
      <p>인증번호 다시받기</p>
    </div>
  </div>
</template>
<script>
  import basicVerificationInfo from "../../components/common/join/basicVerificationInfo.vue"
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    data() {
      return {}
    },
    components: {
      "basic-verification-info": basicVerificationInfo,
      "basic-button": basicButton
    }
  }
</script>
<style scoped>
  .join-verification {
    margin: 0 auto;
    padding: 40px;
    width: 600px;
    height: 392px;
    border: solid 1px #ececec;
    background-color: #ffffff;
    text-align: center;
    vertical-align: middle;
  }
  .join-verification .join-contact {
    display: flex;
    margin-top: 32px;
  }
  .join-verification .join-contact .button {
    margin: 21px 0 0 16px;
  }
  .join-verification .verification-confirm {
    display: flex;
  }
  .join-verification .verification-confirm .button {
    margin-left: 16px;
  }
  .join-verification .resend {
    width: 107px;
    font-size: 14px;
    color: #666666;
    border-bottom: solid 1px #666666;
    cursor: pointer;
  }
</style>
