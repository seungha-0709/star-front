<template>
  <div class="background">
    <ul>
      <li v-for="(article, index) in infoBoardNowList" :key="index">
        <div class="article-icons">
          <mic-icon
            size="1x"
            class="article-icon"
            v-if="(article.infoType === 'news')"
          />
          <check-circle-icon
            size="1x"
            class="article-icon"
            v-if="(article.infoType === 'tip')"
          />
          <file-text-icon
            size="1x"
            class="article-icon"
            v-if="(article.infoType === 'info')"
          />
        </div>
        <span class="chat-board-title">{{ article.title }} </span>
        <span class="reply">{{ `[${article.reply}]` }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { MicIcon, CheckCircleIcon, FileTextIcon } from "vue-feather-icons"
  import { infoBoardNowList } from "../../assets/data/teacherMain/infoBoard.js"

  export default {
    data() {
      return {
        infoBoardNowList
      }
    },
    components: {
      MicIcon,
      CheckCircleIcon,
      FileTextIcon
    }
  }
</script>
<style scoped>
  .background {
    width: auto;
    height: 212px;
    overflow-y: scroll;
    border: 0;
  }
  li {
    margin-left: 32px;
    margin-right: 32px;
    width: auto;
    height: 61px;
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
  .article-icons {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background: #f2f4f7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }
  .article-icon {
    color: #666;
    opacity: 0.4;
  }
</style>
