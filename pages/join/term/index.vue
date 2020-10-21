<template>
  <div class="join-term-page">
    <div class="join-term-title">
      <basic-join-title
        title="회원가입"
        subtitle="약관동의"
        description="서비스 이용 약관 및 개인정보수집, 정보제공활동에 동의해 주세요."
      />
    </div>
    <div class="join-term-group">
      <join-term />
    </div>

    <div class="button">
      <basic-button
        text="동의하기"
        borderRadius="31px"
        background-color="#3f60cc"
        fontWeight="normal"
      />
    </div>
    <copy-right class="copyright" />
  </div>
</template>
<script>
  import basicJoinTitle from "../../../components/common/join/basicJoinTitle.vue"
  import joinTerm from "../../../components/join/joinTerm.vue"
  import basicButton from "../../../components/common/basicButton.vue"
  import copyright from "../../../components/common/copyright"

  export default {
    layout: "contentOnly",
    data() {
      return {}
    },
    components: {
      "basic-join-title": basicJoinTitle,
      "join-term": joinTerm,
      "basic-button": basicButton,
      "copy-right": copyright
    }
  }
</script>
<style scoped>
  .join-term-page {
    margin: 0 auto;
    height: 100%;
  }
  .join-term-page .join-term-title {
    margin-top: 85px;
  }
  .join-term-page .join-term-group {
    margin-top: 40px;
  }
  .join-term-page .button {
    text-align: center;
    margin: 32px 0 96px;
  }
  .join-term-page .copyright {
    margin-bottom: 105px;
  }
</style>
