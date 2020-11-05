<template>
  <div class="review-live-box">
    <h2>리뷰 LIVE 20</h2>
    <ul class="review-live-list">
      <li v-for="(list, index) in reviewLiveList.data" :key="index">
        <a href="">
          <v-avatar size="56">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <div class="title-box">
            <p>{{ list.title }}</p>
            <ul class="review-tag-list">
              <li v-for="(tag, index) in list.tags" :key="index">{{ tag }}</li>
            </ul>
          </div>
          <div class="comment-box">
            {{ list.comment }}
            <span>댓글</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { reviewLiveList } from "../../assets/data/lv0/reviewLiveList.js"

  export default {
    data() {
      return {
        reviewLiveList
      }
    }
  }
</script>

<style scoped>
  .review-live-box {
    position: absolute;
    right: 0;
    top: 28px;
    width: 524px;
    height: 515px;
    border-radius: 8px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
  }
  .review-live-box::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
    pointer-events: none;
  }
  .review-live-box h2 {
    padding-top: 24px;
    margin: 12px 24px;
    font-size: 24px;
    font-weight: 700;
  }
  .review-live-list {
    overflow: auto;
    height: calc(100% - 84px);
    padding: 0 24px;
  }
  .review-live-list > li a {
    display: flex;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #ececec;
    color: #000;
    text-decoration: none;
  }
  .review-live-list > li .title-box {
    width: calc(100% - 136px);
    margin: 0 12px;
  }
  .review-live-list > li .title-box p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 700;
  }
  .review-live-list .review-tag-list {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
  }
  .review-live-list .review-tag-list > li {
    display: inline;
    font-size: 14px;
    color: #666;
    margin-right: 8px;
  }
  .review-live-list .review-tag-list > li:last-child {
    margin-right: 0;
  }
  .review-live-list .comment-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 56px;
    height: 56px;
    border-radius: 16px;
    background-color: rgba(193, 193, 193, 0.1);
    color: #666;
  }
  .review-live-list .comment-box span {
    font-size: 8px;
  }
</style>
