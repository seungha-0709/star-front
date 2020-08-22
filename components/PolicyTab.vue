<template>
  <div class="tab-content">
    <div v-if="tabType === 'service'">
      <service />
    </div>
    <div v-else-if="tabType === 'privacy'">
      <privacy />
    </div>
    <div v-else-if="tabType === 'marketing'">
      <marketing />
    </div>
    <div v-else-if="tabType === 'email'">
      <email />
    </div>
    <div v-else-if="tabType === 'ranking_logic'">
      <rankingLogic />
    </div>
  </div>
</template>

<script>
  import service from "../components/policyContents/service"
  import privacy from "../components/policyContents/privacy"
  import marketing from "../components/policyContents/marketing"
  import email from "../components/policyContents/email"
  import rankingLogic from "../components/policyContents/rankingLogic"

  export default {
    props: ["tab-type"],
    components: {
      service,
      privacy,
      marketing,
      email,
      rankingLogic
    }
  }
</script>

<style scoped></style>
