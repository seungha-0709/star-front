<template>
  <div class="join-term-boxes">
    <div class="join-term-all"></div>
    <div class="join-term-box"></div>
  </div>
</template>
<script>
  import basicTermAll from "../common/join/basicTermAll.vue"
  import basicTermBox from "../common/join/basicTermBox.vue"

  export default {
    data() {
      return {}
    },
    components: {
      "basic-term-all": basicTermAll,
      "basic-term-box": basicTermBox
    }
  }
</script>
<style scoped></style>
