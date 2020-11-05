<template>
  <div>
    <div class="wrap">
      <div class="content">
        <span
          class="ranking-number"
          :class="{ active: rankingInfo.ranking === 1 }"
        >
          {{ rankingInfo.ranking }}</span
        >
        <img :src="rankingInfo.profileImage" alt="선생님 이미지" />
        <div class="teacher-info">
          <strong> {{ rankingInfo.name }} </strong><br />
          {{ rankingInfo.institution }}
        </div>
        <div class="star-score-wrap">
          <span class="star-score">{{ rankingInfo.star }} </span>
          <span class="reviews">{{ `(${rankingInfo.reviews}개)` }}</span>
          <div class="stars">
            <star-icon
              size="1x"
              class="star-icon-gray"
              v-for="(star, index) in 5"
              :key="index"
            />
            <div class="stars-yellow">
              <star-icon
                size="1x"
                class="star-icon-yellow"
                v-for="(star, index) in Math.floor(rankingInfo.star / 2)"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { StarIcon } from "vue-feather-icons"

  export default {
    props: ["rankingInfo"],
    components: {
      StarIcon
    }
  }
</script>

<style scoped>
  .wrap {
    padding: 12px 24px 0px 24px;
    box-sizing: border-box;
  }
  .content {
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    box-sizing: border-box;
    justify-content: space-between;
  }
  .wrap .ranking-number {
    display: inline-block;
    width: 28px;
    height: 28px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #212121;
  }
  .wrap .ranking-number.active {
    display: inline-block;
    width: 28px;
    height: 28px;
    background: #5d7ee9;
    border: 0;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
  .wrap img {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    margin: 0 16px;
  }
  .wrap .teacher-info strong {
    font-size: 16px;
    color: #212121;
    font-weight: bold;
  }
  .wrap .teacher-info {
    font-size: 14px;
    color: #666;
    font-weight: normal;
    width: 215px;
  }
  .star-score-wrap {
    text-align: right;
  }
  .star-score-wrap .star-score {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
  }
  .star-score-wrap .reviews {
    font-size: 14px;
    color: #666;
  }
  .star-icon-gray {
    fill: currentColor;
    color: #ececec;
  }
  .star-icon-yellow {
    fill: currentColor;
    color: #ffc13e;
  }
  .stars {
    position: relative;
  }
  .stars-yellow {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
