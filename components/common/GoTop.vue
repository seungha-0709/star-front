<template>
  <button v-if="scrolled" class="go-top" type="button" v-on:click="onGoTop()">
    TOP
  </button>
</template>

<script>
  export default {
    data() {
      return {
        scrolled: false
      }
    },
    methods: {
      onGoTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
      },
      detectWindowScrollY() {
        this.scrolled = window.scrollY > 100
      }
    },
    mounted() {
      window.addEventListener("scroll", this.detectWindowScrollY)
    },
    beforeDestory() {
      window.removeEventListener("scroll", this.detectWindowScrollY)
    }
  }
</script>

<style scoped>
  .go-top {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: tomato;
  }
</style>
