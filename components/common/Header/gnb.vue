<template>
  <nav>
    <ul class="menu-list">
      <li
        v-for="(list, i) in menuData"
        v-bind:key="i"
        v-on:mouseenter="onShowMenu(i)"
        v-bind:class="{ active: setMenuCode === i }"
        ref="reference"
      >
        {{ list.title }}
        <span
          v-if="setMenuCode === i"
          v-bind:style="{ width: setMenuWidth + 16 + 'px' }"
        />
      </li>
    </ul>
    <div class="sub-menu-wrap" v-show="showSubMenu" v-on:mouseleave="onHideMenu">
      <ul v-if="setMenuCode !== null" class="sub-menu-list">
        <li v-for="(subMenu, k) in menuData[setMenuCode].sub" v-bind:key="k">
          <nuxt-link :to="subMenu.route">{{ subMenu.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { gnbManu } from "./headerData"

export default {
  data() {
    return {
      menuData: gnbManu,
      showSubMenu: false,
      setMenuCode: null,
      setMenuWidth: 0
    }
  },
  methods: {
    onShowMenu(code) {
      this.showSubMenu = true
      this.setMenuCode = code
      this.setMenuWidth = this.$refs.reference[code].clientWidth
    },
    onHideMenu() {
      this.showSubMenu = false
      this.setMenuCode = null
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  line-height: 68px;
}
nav ul {
  list-style: none;
}
nav a {
  text-decoration: none;
}
nav .menu-list {
  display: flex;
}
nav .menu-list > li {
  font-size: 16px;
  color: #666;
  margin-right: 22px;
}
nav .menu-list > li.active {
  position: relative;
  font-weight: bold;
  color: #3f60cc;
}
nav .menu-list > li.active > span {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  height: 14px;
  opacity: 0.1;
  border-radius: 7px;
  background-color: #5d7ee9;
}
nav .menu-list > li:last-child,
nav .sub-menu-list > li:last-child {
  margin-right: 0;
}
nav .sub-menu-wrap {
  position: absolute;
  left: 0;
  top: 68px;
  width: 100%;
  height: 52px;
  line-height: 52px;
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
}
nav .sub-menu-list {
  display: flex;
  justify-content: center;
  width: 1240px;
  margin: 0 auto;
}
nav .sub-menu-list > li {
  margin-right: 16px;
}
nav .sub-menu-list > li a {
  font-size: 14px;
  color: #666;
}
</style>

