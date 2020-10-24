<template>
  <div class="review-amount">
    <header>
      <ul>
        <li
          v-for="(tab, index) in graphTap"
          :key="index"
          :class="{ active: tab.type === activeTab }"
          @click="onChangeActive(tab.type)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </header>
    <main>
      <div v-if="activeTab === 'review'">
        <ul>
          <li>
            <span>오로라</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
          <li>
            <span>과목평균</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
          <li>
            <span>학원평균</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 'score'">
        <ul>
          <li>
            <span>오로라</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
          <li>
            <span>과목평균</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
          <li>
            <span>학원평균</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 'passreview'">
        <ul>
          <li>
            <span>오로라</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
          <li>
            <span>과목평균</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
          <li>
            <span>학원평균</span>
            <div>
              <div></div>
            </div>
            <span>??개</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        graphTap: [
          {
            type: "review",
            name: "리뷰"
          },
          {
            type: "score",
            name: "평점"
          },
          {
            type: "passreview",
            name: "합격수기"
          }
        ],
        activeTab: "review"
      }
    },
    methods: {
      onChangeActive(type) {
        this.activeTab = type
      }
    }
  }
</script>

<style scoped>
  .review-amount {
    width: 458px;
    height: 212px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 0;
    box-sizing: border-box;
  }
  header ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  header > ul > li {
    width: 153px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeff4;
    color: #666;
    font-size: 16px;
    margin: 0;
  }
  header li.active {
    background: #fff;
    color: #212121;
    font-weight: bold;
  }
  ul {
    margin-top: 24px;
  }
  main li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  main li span {
    display: inline-block;
  }
  main li span:first-child {
    width: 52px;
    height: 20px;
    text-align: right;
    font-size: 14px;
    color: #212121;
    margin-right: 16px;
  }
  main li span:last-child {
    margin-left: 12px;
  }
  main li:nth-of-type(1) > div:nth-of-type(1) {
    width: 267px;
    height: 33px;
    background: #5d7ee9;
  }
  main li:nth-of-type(2) > div:nth-of-type(1) {
    width: 267px;
    height: 33px;
    background: #ececec;
  }
  main li:nth-of-type(3) > div:nth-of-type(1) {
    width: 267px;
    height: 33px;
    background: #ececec;
  }
</style>
