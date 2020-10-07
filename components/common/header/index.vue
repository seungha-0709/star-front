<template>
  <header>
    <div class="header-wrap">
      <a href="/" class="logo">
        <img src="/img/logo/lv0_logo_h_blue.png" alt="로고" />
      </a>
      <global-nav-bar></global-nav-bar>
      <btn-link-store></btn-link-store>
      <div class="service-box">
        <btn-service
          v-bind:margin-right="'20px'"
          v-bind:on-click="onClickEvent1"
        >
          <template v-slot:iconButton>
            <div>
              <search-icon
                size="14"
                class="icon-style"
                v-bind:stroke-width="2.5"
              />
            </div>
          </template>
        </btn-service>
        <btn-service
          v-bind:margin-right="'20px'"
          v-bind:on-click="onClickEvent2"
        >
          <template v-slot:iconButton>
            <div>
              <shopping-bag-icon
                size="14"
                class="icon-style"
                v-bind:stroke-width="2.5"
              />
            </div>
          </template>
        </btn-service>
        <btn-service v-bind:on-click="onClickEvent3">
          <template v-slot:iconButton>
            <div>
              <bell-icon
                size="14"
                class="icon-style"
                v-bind:stroke-width="2.5"
              />
            </div>
          </template>
        </btn-service>
      </div>
      <v-avatar size="32">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>
  </header>
</template>

<script>
  import gnbVue from "./gnb.vue"
  import storeButtonVue from "./storeButton.vue"
  import serviceButtonVue from "./serviceButton.vue"
  import { SearchIcon, BellIcon, ShoppingBagIcon } from "vue-feather-icons"

  export default {
    data() {
      return {}
    },
    components: {
      "global-nav-bar": gnbVue,
      "btn-link-store": storeButtonVue,
      "btn-service": serviceButtonVue,
      SearchIcon,
      BellIcon,
      ShoppingBagIcon
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
    display: inline-block;
    margin-right: 24px;
  }
  .logo img {
    width: 116px;
  }
  .service-box {
    display: flex;
    margin-right: auto;
  }
  .service-box .icon-style {
    vertical-align: middle;
    color: #666;
  }
</style>
