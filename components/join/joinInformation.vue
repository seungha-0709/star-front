<template>
  <div class="join-information">
    <div class="join-email">
      <basic-verification-info
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
        @event="doucleCheckEmail"
      />
    </div>
  </div>
</template>
<script>
  import basicVerificationInfo from "../../components/common/join/basicVerificationInfo.vue"
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
      "basic-verification-info": basicVerificationInfo,
      "basic-button": basicButton
    },
    methods: {
      doubleCheckEmail() {}
    }
  }
</script>
<style scoped></style>
