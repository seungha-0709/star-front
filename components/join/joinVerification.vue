<template>
  <div class="join-verification">
    <div class="join-name">
      <basic-verification-info
        name="이름"
        type="text"
        placeholder="인증을 위하여 본인의 실명을 입력해 주세요."
        v-model="name"
      />
    </div>
    <div class="join-contact">
      <basic-verification-info
        name="휴대전화"
        width="367px"
        type="tel"
        placeholder="인증을 위해 휴대전화 번호를 입력해 주세요.(숫자만)"
        v-model="phoneNumber"
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
        @event="sendVerification"
      />
    </div>
    <div class="verification-confirm">
      <basic-verification-info
        width="367px"
        type="tel"
        placeholder="받으신 인증번호를 입력해 주세요."
        v-model="inputCode"
      />
      <div class="verification-time">
        <p v-if="countSecond">03:21</p>
      </div>
      <basic-button
        class="button"
        text="인증하기"
        width="137px"
        background-color="#ffffff"
        fontWeight="400"
        borderColor="#3f60cc"
        borderRadius="0px"
        color="#3f60cc"
        @event="confirmVerification"
      />
    </div>
    <div v-on:click="sendVerification" class="resend">
      <p>인증번호 다시받기</p>
    </div>
  </div>
</template>
<script>
  import basicVerificationInfo from "../../components/common/join/basicVerificationInfo.vue"
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    data() {
      return {
        verificationCode: "201025",
        name: "",
        phoneNumber: "",
        inputCode: "",
        countSecond: false
      }
    },
    components: {
      "basic-verification-info": basicVerificationInfo,
      "basic-button": basicButton
    },
    methods: {
      // eslint-disable-next-line space-before-function-paren
      sendVerification: function (event) {
        alert("인증번호는 " + this.verificationCode + "입니다.")
        this.countSecond = true
      },
      // eslint-disable-next-line space-before-function-paren
      confirmVerification: function (event) {
        // eslint-disable-next-line eqeqeq
        return this.inputCode === this.verificationCode
          ? alert("인증이 완료되었습니다.")
          : alert("인증번호를 다시 확인해주세요.")
      }
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
  .join-verification .verification-time {
    position: absolute;
    top: 562px;
    left: 55%;
  }
  .join-verification .verification-time p {
    color: #ff3366;
    font-size: 14px;
  }
  .join-verification .resend {
    width: 107px;
    font-size: 14px;
    color: #666666;
    border-bottom: solid 1px #666666;
    cursor: pointer;
  }
</style>
