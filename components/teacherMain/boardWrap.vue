<template>
  <div class="background" :style="{ width: width, height: height }">
    <header>
      <h2>{{ title }}</h2>
      <span><plus-icon size="2x" class="plus-icon" /></span>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  import { PlusIcon } from "vue-feather-icons"
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
    },
    components: {
      PlusIcon
    }
  }
</script>

<style scoped>
  .background {
    width: 720px;
    height: 297px;
    border: 1px solid #dfdfdf;
    background: #fff;
    margin-top: 8px;
    margin-bottom: 8px;
    box-sizing: border-box;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin: 32px 32px 8px 32px;
  }
  header h2 {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
  }
  .plus-icon {
    color: #dfdfdf;
  }
</style>
