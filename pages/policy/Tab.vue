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
import service from "./service"
import privacy from "./privacy"
import marketing from "./marketing"
import email from "./email"
import rankingLogic from "./rankingLogic"

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

<style scoped>
</style>
