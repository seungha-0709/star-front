<template>
  <div>
    <div
      class="tab-button"
      :style="{
        width: width,
        height: height
      }"
      @click="$emit('tab-click')"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: ""
      },
      width: {
        default: ""
      },
      height: {
        default: ""
      }
    }
    // data() {
    //   return {
    //     tabActive: false
    //   }
    // }
    // methods: {
    //   tabClick() {
    //     this.tabActive = !this.tabActive
    //   }
    // }
  }
</script>
<style scoped>
  .tab-button.active {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-weight: bold;
    color: #3f60cc;
    font-size: 16px;
  }
  .tab-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eeeff4;
    font-weight: normal;
    color: #666;
  }
</style>
