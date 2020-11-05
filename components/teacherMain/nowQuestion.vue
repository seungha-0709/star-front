<template>
  <div class="now-qna-background">
    <div
      class="qna-article-content"
      v-for="(item, index) in nowQnaList"
      :key="index"
    >
      <now-question-content :nowQnaContents="item" />
    </div>
  </div>
</template>

<script>
  import nowQuestionContent from "./nowQuestionContent.vue"
  import { nowQnaList } from "../../assets/data/teacherMain/nowQuestionList.js"
  export default {
    data() {
      return {
        nowQnaList
      }
    },
    components: {
      nowQuestionContent
    }
  }
</script>

<style scoped>
  .now-qna-background {
    width: auto;
    height: 690px;
    background: #eeeff4;
    margin-top: 8px;
    margin-bottom: 0;
    border: 0;
    overflow-y: scroll;
  }
  .qna-article-content {
    padding: 24px;
    box-sizing: border-box;
  }
</style>
