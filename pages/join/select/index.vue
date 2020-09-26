<template>
  <div class="join-select-page">
    <div class="join-select-title">
      <basic-join-title
        subtitle="회원가입"
        description="본인이 해당하시는 가입 유형을 아래에서 선택해주세요."
      />
    </div>
  </div>
</template>
<script>
  import basicJoinTitle from "../../../components/common/join/basicJoinTitle"
  export default {
    components: {
      "basic-join-title": basicJoinTitle
    }
  }
</script>
<style scoped>
  .join-select-page {
    margin: 0 auto;
  }
  .join-select-page .join-select-title {
    margin-top: 85px;
  }
</style>
