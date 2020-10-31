<template>
  <div class="button">
    <basic-button
      text="버튼"
      hoverBackgroundColor="#212121"
      hoverFontWeight="100"
      hoverColor="ff3366"
      width="400px"
      height="500px"
      borderColor="#462c8d"
    />
  </div>
</template>
<script>
  import basicButton from "../../components/common/basicButton.vue"
  export default {
    data() {
      return {}
    },
    components: {
      "basic-button": basicButton
    }
  }
</script>
<style scoped>
  .button {
    padding: 50px;
  }
</style>
