<template>
  <v-app class="v-app-wrap">
    <v-content>
      <v-container fill-height fluid pa-0 class="v-container-wrap">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {}
  }
</script>

<style scoped>
  .v-app-wrap {
    height: 100%;
  }
  .v-container-wrap {
    height: 100%;
  }
</style>
