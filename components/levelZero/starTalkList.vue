<template>
  <div class="star-talk-box">
    <div class="title">
      <h2>별별수다</h2>
    </div>
    <ul class="star-talk-list">
      <li v-for="(list, index) in starTalkList.data" :key="index">
        <nuxt-link to="">
          <div
            class="thumbnail-box"
            :style="{ backgroundImage: list.member.thumbnail }"
          ></div>
          <div
            class="list-info"
            :class="latestCompare(list.created_at) ? 'latest' : ''"
          >
            <div>
              <span>{{ list.member.nickname }}</span>
              <span class="vertical-bar" />
              <span>{{ format(list.created_at, "yyyy-M-dd") }}</span>
            </div>
            <div class="title-box">
              <h3>{{ list.title }}</h3>
              <span>N</span>
            </div>
          </div>
          <div class="comment-number">
            <span>{{ list.comment }}</span>
            <span>댓글</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { format, subWeeks, isBefore } from "date-fns"
  import { starTalkList } from "../../assets/data/lv0/starTalkList.js"

  export default {
    data() {
      return {
        format,
        starTalkList
      }
    },
    computed: {
      latestCompare() {
        return (createdAt) => {
          // subWeeks = 주어진 날짜에서 지정된 주 수를 뺌.
          const subWeek = subWeeks(Date.now(), 1)
          // isBefore = 지정된 첫번째 날짜가 두번째 날짜 이전인지 확인
          return isBefore(subWeek, createdAt)
        }
      }
    }
  }
</script>

<style scoped>
  .star-talk-box {
    width: 588px;
    padding-right: 32px;
  }
  .star-talk-box .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-bottom: 20px;
  }
  .star-talk-box .title h2 {
    font-size: 28px;
    font-weight: 700;
  }
  .star-talk-box .thumbnail-box {
    width: 70px;
    height: 70px;
    border-radius: 24px;
    background-color: #ccc;
    margin-right: 20px;
  }
  .star-talk-box .star-talk-list li {
    border-bottom: 1px solid #dfdfdf;
  }
  .star-talk-box .star-talk-list li > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #212121;
    padding: 24px 0;
  }
  .star-talk-box .star-talk-list li > a:hover h3 {
    text-decoration: underline;
  }
  .star-talk-box .star-talk-list li:last-child {
    border-bottom: 0;
  }
  .star-talk-box .star-talk-list .list-info {
    width: calc(100% - 138px);
  }
  .star-talk-box .star-talk-list .list-info.latest {
    width: calc(100% - 154px);
  }
  .star-talk-box .star-talk-list .list-info > div {
    display: flex;
    align-items: center;
  }
  .star-talk-box .star-talk-list .list-info .vertical-bar {
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #ececec;
    margin: 0 10px;
  }
  .star-talk-box .star-talk-list .list-info .title-box h3 {
    font-size: 20px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .star-talk-box .star-talk-list .list-info.latest .title-box > span {
    display: inline-block;
    font-size: 10px;
    color: #fff;
    text-align: center;
    min-width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    background-color: #ff3366;
    text-decoration: none;
    margin-left: 4px;
  }
  .star-talk-box .star-talk-list .comment-number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background-color: rgba(193, 193, 193, 0.1);
    color: #666;
    margin-left: auto;
  }
  .star-talk-box .star-talk-list .comment-number span:nth-of-type(1) {
    font-weight: 700;
  }
  .star-talk-box .star-talk-list .comment-number span:nth-of-type(2) {
    font-size: 8px;
  }
</style>
