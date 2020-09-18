<template>
  <div class="status-show" v-on:click="logOut">
    <div class="off-icon">
      <power-icon size="8" class="power-icon"></power-icon>
    </div>
    <a class="status-text" href="#">로그아웃</a>
  </div>
</template>

<script>
  import { PowerIcon } from "vue-feather-icons"

  export default {
    components: {
      PowerIcon
    },
    methods: {
      logOut() {}
    }
  }
</script>
<style scoped>
  .status-show {
    display: flex;
    height: 20px;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
  }
  .off-icon {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #dfdfdf;
    margin-right: 4px;
  }
  .power-icon {
    position: relative;
    top: -3px;
    color: #666666;
  }
  .status-text {
    position: relative;
    color: #666666;
    top: -3px;
  }
</style>
