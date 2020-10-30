<template>
  <div class="review-content">
    <header>
      <ul>
        <li
          v-for="(tab, index) in reviewContentTab"
          :key="index"
          :class="{ active: tab.type === activeTab }"
          @click="onChangeActive(tab.type)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </header>
    <main>
      <section id="review" v-if="activeTab === 'review'">
        <article v-for="(review, index) in reviews" :key="index">
          <div class="sticker-title positive" v-if="review.tag === 'positive'">
            긍정적인 리뷰
          </div>
          <div class="sticker-title negative" v-if="review.tag === 'negative'">
            부정적인 리뷰
          </div>
          <h2>"{{ review.title }}"</h2>
          <div class="review-info">
            <div>
              <div class="profile-image"></div>
              {{ review.author }}
            </div>
            <div>{{ review.category }}/{{ review.level }}</div>
          </div>
          <div class="review-text">
            <div>
              <span class="sticker-good">장점</span>
              {{ review.good }}
            </div>
            <div>
              <span class="sticker-bad">단점</span>
              {{ review.bad }}
            </div>
          </div>
          <div class="content-bottom">
            <div class="star-score">
              <span class="score">{{ review.star.toFixed(1) }} </span>
              <star-icon
                class="star-icon"
                size="1x"
                :class="{ active: review.star >= 2 }"
              />
              <star-icon
                class="star-icon"
                size="1x"
                :class="{ active: review.star >= 4 }"
              />
              <star-icon
                class="star-icon"
                size="1x"
                :class="{ active: review.star >= 6 }"
              />
              <star-icon
                class="star-icon"
                size="1x"
                :class="{ active: review.star >= 8 }"
              />
              <star-icon
                class="star-icon"
                size="1x"
                :class="{ active: review.star >= 10 }"
              />
            </div>
            <div class="button-wrap">좋아요, 답글</div>
          </div>
        </article>
      </section>
      <section id="transfer" v-if="activeTab === 'transfer'">
        <div class="transfer-info-top">
          <img src="/img/teacher/group-3@3x.png" alt="" />
          <div class="teacher-change">
            <div class="teacher-info-wrap">
              <div class="teacher-image-small"></div>
              <div class="teacher-info">
                <strong>Before</strong><br />
                오로로<br />
                <span>해커스어학원</span><br />
              </div>
            </div>
            <div class="teacher-info-wrap">
              <div class="teacher-image-small"></div>
              <div class="teacher-info">
                <strong>After</strong><br />
                오로라<br />
                <span>YBM어학원</span><br />
              </div>
            </div>
          </div>
          <div class="transfer-feel">
            <div></div>
            <div>
              <strong>Bad</strong><br />
              다시 돌아갈 수 있다면<br />
              그렇게 하고 싶어요.
            </div>
          </div>
        </div>
        <article>
          <h2>{{ transferReview.title }}</h2>
          <div>
            <span class="transfer-title">선생님을 왜 바꾸셨나요?</span>
            {{ transferReview.reason }}
          </div>
          <div>
            <span class="transfer-title-before">before</span>
            {{ transferReview.before }}
          </div>
          <div>
            <span class="transfer-title-after">after</span>
            {{ transferReview.after }}
          </div>
        </article>
      </section>
    </main>
    <footer>
      ???개의 더 많은 청정리뷰 보러 가기
    </footer>
  </div>
</template>

<script>
  import basicButton from "../../components/common/basicButton.vue"
  import { StarIcon } from "vue-feather-icons"
  import {
    reviews,
    transferReview
  } from "../../assets/data/teacher/temporaryTeacher.js"

  export default {
    data() {
      return {
        reviewContentTab: [
          {
            type: "review",
            name: "강사리뷰"
          },
          {
            type: "transfer",
            name: "환승후기"
          }
        ],
        activeTab: "review",
        reviews,
        transferReview
      }
    },
    components: {
      basicButton,
      StarIcon
    },
    methods: {
      onChangeActive(type) {
        this.activeTab = type
      }
    }
  }
</script>

<style scoped>
  .review-content {
    width: 924px;
    /* height: 611px; */
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 0;
    box-sizing: border-box;
  }
  header {
    margin-bottom: 24px;
  }
  ul {
    display: flex;
  }
  li {
    width: 462px;
    height: 42px;
    background: #eeeff4;
    font-size: 16px;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li.active {
    background: #fff;
    color: #212121;
    font-weight: bold;
  }
  #review {
    display: flex;
  }
  #review > article {
    width: 462px;
    padding: 0px 32px 32px 32px;
  }
  #review > article:nth-of-type(1) {
    border-right: 1px solid #dfdfdf;
  }
  #review > article h2 {
    color: #212121;
    font-weight: bold;
    font-size: 17px;
    margin-top: 12px;
    margin-bottom: 12px;
    height: 50px;
  }
  .review-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    box-sizing: border-box;
    border-bottom: 1px solid #dfdfdf;
  }
  .review-info > div:nth-child(1) {
    font-size: 14px;
    color: #212121;
    display: flex;
    align-items: center;
  }
  .review-info > div:nth-child(2) {
    font-size: 14px;
    color: #666;
  }
  .profile-image {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #dfdfdf;
    display: inline-block;
    margin-right: 8px;
  }
  .review-text > div {
    height: 110px;
    overflow: hidden;
    font-size: 14px;
    color: #666;
    /* 한 줄 자르기 */
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* 여러 줄 자르기 추가 스타일 */
    white-space: normal;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .review-text > div:nth-child(1) {
    margin-top: 24px;
  }
  .review-text > div:nth-child(2) {
    margin-top: 16px;
  }
  .review-text > div > span {
    display: block;
    margin-bottom: 6px;
  }
  .content-bottom {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* 둥근 네모 */
  .sticker-title.positive {
    border: 1px solid #5d7ee9;
    background: #ffffff;
    color: #5d7ee9;
    width: 93px;
    height: 24px;
    border-radius: 46.5px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .sticker-title.negative {
    border: 1px solid #c1c1c1;
    background: #ffffff;
    color: #666;
    width: 93px;
    height: 24px;
    border-radius: 46.5px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .sticker-good {
    width: 55px;
    height: 24px;
    font-weight: bold;
    color: #fff;
    background: #5d7ee9;
    display: block;
    text-align: center;
    border-radius: 16px;
    line-height: 2;
    font-size: 12px;
  }
  .sticker-bad {
    width: 55px;
    height: 24px;
    font-weight: bold;
    color: #fff;
    background: #ff3366;
    display: block;
    text-align: center;
    border-radius: 16px;
    line-height: 2;
    font-size: 12px;
  }

  /* 별 아이콘 */
  .star-icon {
    border: 0;
    fill: currentColor;
    color: #ececec;
  }
  .star-icon.active {
    border: 0;
    fill: currentColor;
    color: #ffc13e;
  }
  span.score {
    font-size: 28px;
    font-weight: bold;
  }

  /* 환승후기 */

  #transfer {
    display: block;
    padding: 0 36px 24px 36px;
    box-sizing: border-box;
  }
  .transfer-info-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
  }
  .teacher-change {
    display: flex;
    justify-content: space-between;
    width: 556px;
  }
  .teacher-info-wrap {
    width: 278px;
    display: flex;
    align-items: flex-start;
  }
  .teacher-info-wrap:nth-of-type(2) {
    width: 240px;
  }
  .teacher-info {
    font-size: 16px;
    color: #212121;
    font-weight: bold;
    margin: 0;
  }
  .teacher-info > span {
    font-size: 14px;
    color: #666;
    font-weight: normal;
    margin: 0;
  }
  .teacher-info > strong {
    font-weight: bold;
    font-size: 18px;
    color: #666;
    display: inline-block;
    margin-bottom: 4px;
  }
  .transfer-info-top img {
    position: absolute;
    width: 60px;
    left: 220px;
  }
  .teacher-image-small {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eeeff4;
    margin-right: 20px;
  }
  .transfer-feel {
    width: 276px;
    height: 100px;
    border-left: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
  }
  .transfer-feel > div:nth-of-type(1) {
    width: 64px;
    height: 64px;
    border-radius: 8px;
    background: #5d7ee9;
    opacity: 0.1;
    margin-left: 20px;
    margin-right: 30px;
  }
  .transfer-feel > div:nth-of-type(2) {
    font-size: 14px;
    color: #666;
    line-height: 18px;
  }
  .transfer-feel > div:nth-of-type(2) strong {
    font-size: 22px;
    font-weight: bold;
    color: #5d7ee9;
    display: inline-block;
    margin-bottom: 10px;
  }
  #transfer > article {
    display: block;
    width: 100%;
  }
  #transfer > article h2 {
    font-size: 18px;
    font-weight: bold;
    color: #212121;
    margin-top: 16px;
  }
  #transfer > article span.transfer-title {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #c1c1c1;
    color: #fff;
    font-weight: bold;
    width: 155px;
    border-radius: 16px;
    font-size: 12px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #transfer > article span.transfer-title-before {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #c1c1c1;
    color: #fff;
    font-weight: bold;
    width: 72px;
    border-radius: 16px;
    font-size: 12px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #transfer > article span.transfer-title-after {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #5d7ee9;
    color: #fff;
    font-weight: bold;
    width: 72px;
    border-radius: 16px;
    font-size: 12px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #transfer > article > div {
    /* 한 줄 자르기 */
    font-size: 15px;
    color: #666;
    height: 85px;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* 여러 줄 자르기 추가 스타일 */
    white-space: normal;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  footer {
    width: 100%;
    border-top: 1px solid #dfdfdf;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
