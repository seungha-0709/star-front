<template>
  <div class="review-list">
    <header>
        <h1>수강후기</h1>
    </header>
    <main>
        <ul>
            <li v-for="(content, index) in reviewLists" :key="index">
                <div><div class="profile-icon"></div></div>
                <div class="content">
                    <span>{{ content.title }}</span>
                    <span>{{ content.content }}</span>
                    <span>{{ content.author}}</span>
                    <span> | </span>
                    <span>{{ content.date }}</span>
                </div>
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
import { reviewLists } from "../../assets/data/teacher/temporaryTeacher.js"
  export default {
      data() {
          return {
              reviewLists
          }
      }
  }
</script>

<style scoped>
  .review-list {
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
      height: 124px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #212121;
      padding-top: 16px;
      padding-bottom: 16px;
      box-sizing: border-box;
  }
  li:nth-child(2) {
      border-top: 1px solid #dfdfdf;
      border-bottom: 1px solid #dfdfdf;;
  }
  .content {
      width: 324px;
  }
  .content > span:nth-child(1),span:nth-child(2){
      display: block;
  }
  .content > span:nth-child(1) {
      font-size: 16px;
      font-weight: bold;
      color: #212121;
      margin-bottom: 4px;
  }
  .content > span:nth-child(2) {
      font-size: 14px;
      color: #666;
      font-weight: normal;
      margin-bottom: 4px;
  }
  .content > span:nth-child(4) {
      color: #dfdfdf;
  }
  .content > span:nth-child(5) {
      color: #666;
  }
  .profile-icon {
      width: 56px;
      height: 56px;
      border-radius: 28px;
      background: #eeeff4;
  }
</style>
