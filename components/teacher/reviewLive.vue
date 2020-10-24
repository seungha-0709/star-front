<template>
  <div>
    <header>
      <h1><span>실시간</span> 평가</h1>
      <basic-button
        text="평가하기"
        backgroundColor="#f4f7ff"
        borderColor="#dfdfdf"
        color="#3f60cc"
        borderRadius="31px"
        fontWeight="normal"
        width="125px"
        height="42px"
      />
    </header>
    <main>
      <div
        class="review"
        v-for="(content, index) in reviewLiveBest"
        :key="index"
      >
        <div>
          <span class="title">{{ content.title }}</span>
          <span class="tag">{{ content.tag }}</span>
        </div>
        <img
          src="/img/teacher/icon-emotion-01-off@2x.png"
          alt="bad"
          v-if="content.goodbad === 'bad'"
        />
        <img
          src="/img/teacher/icon-emotion-04-off@2x.png"
          alt="good"
          v-if="content.goodbad === 'good'"
        />
        <img
          src="/img/teacher/icon-emotion-05-off@2x.png"
          alt="terrible"
          v-if="content.goodbad === 'terrible'"
        />
      </div>
      <div class="line"></div>
      <div
        class="review"
        v-for="(content, index) in reviewLiveNormal"
        :key="index"
      >
        <div>
          <span class="title">{{ content.title }}</span>
          <span class="tag">{{ content.tag }}</span>
        </div>
        <img
          src="/img/teacher/icon-emotion-01-off@2x.png"
          alt="bad"
          v-if="content.goodbad === 'bad'"
        />
        <img
          src="/img/teacher/icon-emotion-04-off@2x.png"
          alt="good"
          v-if="content.goodbad === 'good'"
        />
        <img
          src="/img/teacher/icon-emotion-05-off@2x.png"
          alt="terrible"
          v-if="content.goodbad === 'terrible'"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import basicButton from "../../components/common/basicButton.vue"
  import { reviewLiveData } from "../../assets/data/teacher/temporaryTeacher.js"
  export default {
    data() {
      return {
        reviewLiveData
      }
    },
    computed: {
      reviewLiveBest() {
        return reviewLiveData.filter((review) => review.tagid === "best")
      },
      reviewLiveNormal() {
        return reviewLiveData.filter((review) => review.tagid === "normal")
      }
    },
    components: {
      basicButton
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }
  h1 {
    font-size: 22px;
    color: #212121;
    font-weight: bold;
  }
  h1 > span {
    color: #3f60cc;
  }
  main {
    width: 544px;
    height: 352px;
    background: #eeeff4;
    border: 1px solid #dfdfdf;
    padding: 12px 24px 12px 12px;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .review {
    width: 508px;
    height: 71px;
    background: #fff;
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 12px;
    box-sizing: border-box;
  }
  .title {
    font-size: 16px;
    color: #212121;
    display: inline-block;
  }
  .tag {
    margin-top: 4px;
    font-size: 13px;
    color: #5e3fcc;
    display: block;
  }
  .line {
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    margin: 12px 0;
  }
  .review {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .review img {
    width: 40px;
    height: 40px;
    display: inline-block;
  }
</style>
