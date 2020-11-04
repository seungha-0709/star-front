<template>
  <div class="join-information-page">
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
        text="가입완료"
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
  import joinInformation from "../../../components/join/joinInformation.vue"
  import basicButton from "../../../components/common/basicButton.vue"
  import copyright from "../../../components/common/copyright"

  export default {
    layout: "contentOnly",

    components: {
      "basic-join-title": basicJoinTitle,
      "join-information": joinInformation,
      "basic-button": basicButton,
      "copy-right": copyright
    }
  }
</script>
<style scoped>
  .join-information-page {
    margin: 0 auto;
    height: 100%;
    text-align: center;
    padding: 85px 0 90px;
  }
  .join-information-page .join-information {
    margin-top: 40px;
  }
  .join-information-page .join-information-title {
    width: 350px;
    margin: 0 auto;
  }
  .join-information-page .banner {
    margin-top: 16px;
  }
  .join-information-page .banner img {
    width: 600px;
    height: 120px;
  }
  .join-information-page .button {
    text-align: center;
    margin: 32px 0 96px;
  }
  .join-information-page .button:first-child {
    margin-right: 16px;
  }
</style>
