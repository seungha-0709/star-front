<template>
  <button
    type="button"
    class="btn-service"
    v-bind:style="{ marginRight: marginRight ? marginRight : 0 }"
    v-on:click="onClick"
  >
    <slot name="iconButton" />
  </button>
</template>

<script>
  export default {
    props: ["margin-right", "onClick"],
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .btn-service {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #dfdfdf;
    vertical-align: top;
  }
</style>
