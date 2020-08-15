<template>
  <v-app>
    <header-component />
    <v-container>
      <nuxt />
    </v-container>
    <footer-component />
  </v-app>
</template>

<script>
  import HeaderVue from "../components/Header.vue"
  import FooterVue from "../components/Footer.vue"

  export default {
    components: {
      "header-component": HeaderVue,
      "footer-component": FooterVue
    }
  }
</script>
