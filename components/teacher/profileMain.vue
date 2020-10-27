<template>
  <div class="profile-main">
    <header>
      <div>
        <h1>오로라 선생님</h1>
        <div class="title-score">
          <div class="number-score">
            <div>
              <span class="score">{{ score.starScore }}</span>
              <span class="total-score">{{ `/${score.total}` }}</span>
            </div>
            <div class="star-score">
              <star-icon
                class="star-icon"
                size="1.5x"
                :class="{ active: score.starScore >= 2 }"
              />
              <star-icon
                class="star-icon"
                size="1.5x"
                :class="{ active: score.starScore >= 4 }"
              />
              <star-icon
                class="star-icon"
                size="1.5x"
                :class="{ active: score.starScore >= 6 }"
              />
              <star-icon
                class="star-icon"
                size="1.5x"
                :class="{ active: score.starScore >= 8 }"
              />
              <star-icon
                class="star-icon"
                size="1.5x"
                :class="{ active: score.starScore >= 10 }"
              />
            </div>
          </div>
        </div>
      </div>
      <h2>노력은 배신하지 않습니다.</h2>
    </header>
    <main>
      <div class="main-side">
        <div class="picture">
          <img
            src="/img/teacher/default_teacher01_01@2x.png"
            alt="오로라 선생님"
          />
          <img
            class="ranking-first"
            src="/img/teacher/mark-02-ranking-01@2x.png"
            alt="랭킹 1등"
          />
        </div>
        <div class="button-wrap">
          <basic-button
            width="280px"
            borderRadius="4px"
            backgroundColor="#3f60cc"
            text="팔로우하고 더 많은 자료 보기"
            fontWeight="normal"
          />
          <basic-button
            width="280px"
            borderRadius="4px"
            backgroundColor="#ffffff"
            color="#212121"
            text="수강신청하기"
            borderColor="#dfdfdf"
            fontWeight="normal"
          />
        </div>
      </div>
      <div class="review-live">
        <review-live />
      </div>
    </main>
  </div>
</template>

<script>
  import reviewLive from "./reviewLive.vue"
  import basicButton from "../common/basicButton.vue"
  import { StarIcon } from "vue-feather-icons"
  export default {
    data() {
      return {
        score: {
          total: 10,
          starScore: 9.5
        }
      }
    },
    components: {
      reviewLive,
      basicButton,
      StarIcon
    }
  }
</script>

<style scoped>
  .profile-main {
    width: 924px;
    border: 1px solid #dfdfdf;
    background: #fff;
    padding: 40px;
    box-sizing: border-box;
  }
  header {
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 15px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #212121;
  }
  h2 {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
  .star-score {
    margin-left: 8px;
    margin-bottom: 8px;
  }
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
  header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 41px;
  }
  .number-score {
    display: flex;
    align-items: flex-end;
  }
  .score {
    font-size: 40px;
    color: #212121;
    font-weight: bold;
  }
  .total-score {
    font-size: 14px;
    color: #666;
  }

  main {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .picture {
    width: 280px;
    height: 280px;
    background: #eeeff4;
  }
  .button-wrap {
    margin-top: 16px;
    width: 280px;
    height: 112px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .picture {
    display: flex;
    align-items: flex-end;
    position: relative;
  }
  .picture img {
    width: 280px;
    height: 280px;
  }
  .picture .ranking-first {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 16px;
    right: 12px;
  }
</style>
