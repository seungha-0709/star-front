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
import HeaderVue from "../components/common/Header"
import FooterVue from "../components/common/Footer.vue"
import GoTopVue from "../components/common/GoTop.vue"

export default {
  data() {
    return {}
  },
  components: {
    "header-component": HeaderVue,
    "footer-component": FooterVue,
    "go-top-component": GoTopVue
  }
}
</script>
