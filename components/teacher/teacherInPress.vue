<template>
  <div class="teacher-in-press">
    <header>
        <h1>언론 속의 선생님</h1>
        <img src="/img/teacher/rectangle@3x.png" alt="언론 속의 선생님" />
    </header>
    <main>
        <ul>
            <li v-for="(article, index) in pressArticle" :key="index">
                {{ article.title }}
                <span>{{ article.site }}</span>
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
import { pressArticle } from "../../assets/data/teacher/temporaryTeacher.js"
  export default {
      data() {
          return {
              pressArticle
          }
      }
  }
</script>

<style scoped>
  .teacher-in-press {
    width: 458px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 32px;
    box-sizing: border-box;
  }
  h1 {
      font-size: 20px;
      color: #212121;
      font-weight: bold;
  }

  header > img {
      width: 394px;
      display: block;
      margin: 16px auto 12px auto;
  }
  li {
      border-bottom: 1px solid #dfdfdf;
      height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #212121;
  }
  li > span {
      display: inline-block
  }
</style>
