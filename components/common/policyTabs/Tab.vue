<template>
  <div class="tab-content">
    <div v-if="tabType === 'service'">
      이용약관
    </div>
    <div v-else-if="tabType === 'privacy'">
      개인정보처리방침
    </div>
    <div v-else-if="tabType === 'marketing'">
      정보제공활용동의
    </div>
    <div v-else-if="tabType === 'email'">
      이메일 집단수집거부
    </div>
    <div v-else-if="tabType === 'ranking_logic'">
      랭킹산정 Logic
    </div>
  </div>
</template>

<script>
  export default {
    props: ["tab-type"]
  }
</script>

<style scoped>
  .tab-content {
    text-align: center;
  }
</style>
