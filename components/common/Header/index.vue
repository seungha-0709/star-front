<template>
  <header>
    <div class="header-wrap">
      <div class="logo">
        <img src alt="로고" />
      </div>
      <global-nav-bar></global-nav-bar>
      <btn-link-store></btn-link-store>
      <div class="service-box">
        <btn-service v-bind:margin-right="20" icon="search" v-bind:on-click="onClickEvent1"></btn-service>
        <btn-service
          v-bind:margin-right="20"
          icon="shopping_basket"
          v-bind:on-click="onClickEvent2"
        ></btn-service>
        <btn-service icon="alarm" v-bind:on-click="onClickEvent3"></btn-service>
      </div>
      <v-avatar size="32">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>
  </header>
</template>

<script>
import gnbVue from "./gnb.vue"
import StoreButtonVue from "./StoreButton.vue"
import ServiceButtonVue from "./ServiceButton.vue"

export default {
  data() {
    return {}
  },
  components: {
    "global-nav-bar": gnbVue,
    "btn-link-store": StoreButtonVue,
    "btn-service": ServiceButtonVue
  },
  methods: {
    onClickEvent1() {
      console.log("button event1")
    },
    onClickEvent2() {
      console.log("button event2")
    },
    onClickEvent3() {
      console.log("button event3")
    }
  }
}
</script>

<style scoped>
header {
  height: 68px;
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
}
.header-wrap {
  width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.logo {
  margin-right: 24px;
}
.service-box {
  display: flex;
  margin-right: auto;
}
</style>
