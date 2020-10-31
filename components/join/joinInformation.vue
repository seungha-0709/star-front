<template>
  <div class="join-information">
    <div class="join-email">
      <join-verification-info
        name="아이디 (이메일 주소)"
        width="367px"
        type="email"
        placeholder="아이디로 사용될 이메일 주소를 입력해 주세요."
        v-model="email"
      />
      <basic-button
        class="button"
        text="중복확인"
        width="137px"
        background-color="#ffffff"
        fontWeight="400"
        borderColor="#dfdfdf"
        borderRadius="0px"
        color="#212121"
      />
    </div>
  </div>
</template>
<script>
  import joinVerificationInfo from "./joinVerificationInfo"
  import basicButton from "../../components/common/basicButton.vue"
  export default {
    data() {
      return {
        email: "",
        password: "",
        passwordCheck: "",
        nickname: ""
      }
    },
    components: {
      "join-verification-info": joinVerificationInfo,
      "basic-button": basicButton
    },
    methods: {
      doubleCheckEmail() {}
    }
  }
</script>
<style scoped>
  .join-infomation {
    margin: 0 auto;
    padding: 40px;
    width: 600px;
    height: 548px;
    border: solid 1px #ececec;
    background-color: #ffffff;
    text-align: center;
    vertical-align: middle;
  }
  .join-infomation .join-email {
    display: flex;
  }
  .join-infomation .join-email .button {
    margin: 21px 0 0 16px;
  }
</style>
