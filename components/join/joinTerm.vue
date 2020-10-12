<template>
  <div class="join-term-boxes">
    <div class="join-term-all"></div>
    <div
      class="join-term-box"
      v-for="(item, index) in joinTermInfo"
      :key="index"
    >
      <basic-join-term-box :title="item.title" :context="item.context" />
    </div>
  </div>
</template>
<script>
  import basicJoinTermAll from "../common/join/basicJoinTermAll.vue"
  import basicJoinTermBox from "../common/join/basicJoinTermBox.vue"
  import { joinTermInfo } from "../../assets/data/join/joinTerm.js"

  export default {
    data() {
      return {
        joinTermInfo
      }
    },
    components: {
      "basic-term-all": basicJoinTermAll,
      "basic-term-box": basicJoinTermBox
    }
  }
</script>
<style scoped></style>
