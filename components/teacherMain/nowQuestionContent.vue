<template>
  <div class="background">
    <div class="content-wrap" v-if="nowQnaContents.depth === 1">
      <img :src="nowQnaContents.profileImage" :alt="nowQnaContents.author" />
      <div class="qna-article">
        <div>{{ nowQnaContents.author }}</div>
        <div>
          <p>{{ nowQnaContents.title }}</p>
          <p class="article">{{ nowQnaContents.content }}</p>
        </div>
      </div>
    </div>
    <div class="answer-wrap" v-if="nowQnaContents.depth === 2">
      <img :src="nowQnaContents.profileImage" :alt="nowQnaContents.author" />
      <div class="qna-article">
        <div>{{ nowQnaContents.author }}</div>
        <div>
          <p>{{ nowQnaContents.title }}</p>
          <p class="article">{{ nowQnaContents.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["nowQnaContents"]
  }
</script>

<style scoped>
  .content-wrap {
    display: flex;
    align-items: flex-start;
  }
  .content-wrap img {
    width: 56px;
    height: 56px;
    border-radius: 28px;
  }
  .content-wrap .qna-article {
    margin-left: 8px;
  }
  .content-wrap .qna-article div:nth-of-type(1) {
    font-weight: bold;
    font-size: 14px;
    color: #212121;
    margin-bottom: 8px;
  }
  .content-wrap .qna-article div:nth-of-type(2) {
    border-radius: 8px;
    width: 400px;
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
  }
  .content-wrap .qna-article p:nth-of-type(1) {
    font-weight: bold;
    font-size: 16px;
    color: #212121;
    margin-bottom: 4px;
  }
  .content-wrap .qna-article p:nth-of-type(2) {
    font-size: 14px;
    color: #212121;
    font-weight: normal;
  }

  /** 답변 */
  .answer-wrap {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
  }
  .answer-wrap img {
    width: 56px;
    height: 56px;
    border-radius: 28px;
  }
  .answer-wrap .qna-article {
    margin-right: 8px;
  }
  .answer-wrap .qna-article div:nth-of-type(1) {
    font-weight: bold;
    font-size: 14px;
    color: #212121;
    text-align: right;
    margin-bottom: 8px;
  }
  .answer-wrap .qna-article div:nth-of-type(2) {
    border-radius: 8px;
    width: 400px;
    padding: 16px;
    box-sizing: border-box;
    background: #d2d9ec;
  }
  .answer-wrap .qna-article p:nth-of-type(1) {
    font-weight: bold;
    font-size: 16px;
    color: #212121;
    margin-bottom: 4px;
  }
  .answer-wrap .qna-article p:nth-of-type(2) {
    font-size: 14px;
    color: #212121;
    font-weight: normal;
  }
</style>
