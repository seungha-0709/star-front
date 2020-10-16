<template>
  <v-app class="v-app-wrap">
    <v-content>
      <v-container fluid pa-0 class="v-container-wrap">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapActions } from "vuex"

  export default {
    data() {
      return {}
    },
    components: {},
    methods: {
      ...mapActions(["AC_ISSUE_TOKEN"])
    },
    mounted() {
      this.AC_ISSUE_TOKEN()
    }
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
