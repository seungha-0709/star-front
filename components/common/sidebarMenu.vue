<template>
  <div class="sidebar-menu">
    <div class="rectangle">
      <div class="title">
        <slot />
        <h4 class="menu-title">{{ title }}</h4>
      </div>
      <ul class="menu-list">
        <li v-for="(item, index) in menu" :key="index">
          <nuxt-link :to="item.link"> {{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        default: ""
      },
      menu: {
        default: []
      }
    }
  }
</script>

<style scoped>
  .sidebar-menu {
    width: 260px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    margin: 0 16px 8px 0;
  }
  .sidebar-menu .rectangle {
    width: 100%;
    height: 100%;
    padding: 32px 24px 8px;
  }
  .sidebar-menu .title {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .menu-title {
    font-size: 24px;
    color: #666666;
    margin-left: 8px;
  }
  .sidebar-menu .menu-list li {
    border-bottom: 1px solid #ececec;
  }
  .sidebar-menu .menu-list li:last-child {
    border-bottom: 0;
  }
  .sidebar-menu .menu-list li a {
    display: block;
    line-height: 52px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #212121;
    text-decoration: none;
  }
  .sidebar-menu .menu-list li a:hover {
    color: #3f60cc;
  }
</style>
