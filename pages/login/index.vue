<template>
  <div class="login-page">
    <login />
  </div>
</template>

<script>
import login from "../../components/login"
export default {
  layout: "contentOnly",
  components: {
    login
  }
}
</script>

<style scoped>
.login-page {
  height: 100%;
}
</style>