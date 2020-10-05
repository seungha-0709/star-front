<template>
  <v-app>
    <header-component />
    <v-content>
      <v-container fluid pa-0>
        <nuxt />
      </v-container>
    </v-content>
    <footer-component />
    <go-top-component />
  </v-app>
</template>

<script>
  import { mapActions } from "vuex"

  import headerVue from "../components/common/header/index.vue"
  import footerVue from "../components/common/footer.vue"
  import goTopVue from "../components/common/goTop.vue"

  export default {
    data() {
      return {}
    },
    components: {
      "header-component": headerVue,
      "footer-component": footerVue,
      "go-top-component": goTopVue
    },
    methods: {
      ...mapActions(["AC_ISSUE_TOKEN"])
    },
    mounted() {
      this.AC_ISSUE_TOKEN()
    }
  }
</script>
