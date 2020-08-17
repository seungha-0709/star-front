<template>
  <v-app>
    <header-component />
    <v-container>
      <nuxt />
    </v-container>
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
