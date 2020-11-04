<template>
  <div>
    <ul>
      <li v-for="(article, index) in chatBoardNowList" :key="index">
        <span class="chat-board-title">{{ article.title }} </span>
        <span class="reply">{{ `[${article.reply}]` }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { chatBoardNowList } from "../../assets/data/teacherMain/chatBoard.js"
  export default {
    data() {
      return {
        chatBoardNowList
      }
    }
  }
</script>
<style scoped>
  div {
    height: 212px;
    overflow-y: scroll;
  }
  ul {
  }
  li {
    margin-left: 32px;
    margin-right: 32px;
    width: auto;
    height: 42px;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
  }
  li:hover {
  }
  li .chat-board-title {
    font-size: 14px;
    color: #212121;
  }
  li .reply {
    font-size: 14px;
    color: #ff3366;
  }
  li .reply::before {
    content: "";
    display: inline-block;
    width: 8px;
  }
</style>
