<template>
  <div class="btn-check" :class="{ active: value }">
    <check-icon size="12" v-bind:stroke-width="4" color="#fff" />
  </div>
</template>

<script>
  import { CheckIcon } from "vue-feather-icons"

  export default {
    props: { value: Boolean },
    components: {
      CheckIcon
    }
  }
</script>

<style scoped>
  .btn-check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #dfdfdf;
    cursor: pointer;
  }
  .btn-check.active {
    background-color: #1673e6;
  }
</style>
