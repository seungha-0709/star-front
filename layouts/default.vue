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
  import { mapGetters, mapActions } from "vuex"
  import Cookies from "js-cookie"

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
    computed: {
      ...mapGetters({
        storeIssueToken: "GE_ISSUE_TOKEN"
      })
    },
    methods: {
      ...mapActions(["AC_ISSUE_TOKEN"])
    },
    created() {
      this.AC_ISSUE_TOKEN()
    }
  }
</script>
