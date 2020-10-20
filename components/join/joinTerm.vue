<template>
  <div class="join-term-boxes">
    <div class="join-term-all">
      <basic-join-term-all
        :term-all-agree="termAllAgree"
        @check-all="handleCheckAll"
      />
    </div>
    <div
      class="join-term-box"
      v-for="(item, index) in joinTermInfo"
      :key="index"
    >
      <basic-join-term-box
        :term-agree="termAllAgree[index]"
        :title="item.title"
        :context="item.context"
        @check="handleCheck(index, termAllAgree[index])"
      />
    </div>
    <div class="alert" v-if="!termAllAgree[2]">
      <p>
        미동의 시 별별선생이 제공하는 다양한 학원/강사진의 학습 정보 전달이
        제한될 수 있습니다.
      </p>
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
        joinTermInfo,
        termAllAgree: [false, false, false]
      }
    },
    components: {
      "basic-join-term-all": basicJoinTermAll,
      "basic-join-term-box": basicJoinTermBox
    },
    methods: {
      handleCheckAll() {
        const allCheckState = this.termAllAgree.every((item) => item === true)
          ? [false, false, false]
          : [true, true, true]
        return (this.termAllAgree = allCheckState)
      },
      handleCheck(index, value) {
        return this.termAllAgree.splice(index, 1, !value)
      }
    }
  }
</script>
<style scoped>
  .join-term-boxes {
    width: 600px;
    margin: 0 auto;
  }
  .join-term-boxes .alert {
    width: 600px;
    font-size: 14px;
    color: #ff3366;
    margin: 16px auto 0;
  }
  .join-term-boxes .alert p {
    text-align: left;
  }
</style>
