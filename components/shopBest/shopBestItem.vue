<template>
  <!-- 상품 정보 표기 개별 컴포넌트 -->
  <div class="best-item-body">
    <div
      class="best-item-img"
      :style="{ backgroundImage: 'url(' + propsData.img + ')' }"
    >
      <span class="best-label" v-if="propsData.best === true">BEST</span>
      <div class="like-btn" @click="likePlus(indexData)">
        <v-icon color="#fff" large v-if="likeToggle % 2 === 0">
          favorite_border
        </v-icon>
        <v-icon color="#f65d58" large v-if="likeToggle % 2 === 1">
          favorite
        </v-icon>
      </div>
    </div>
    <div class="best-item-info">
      <span class="teacher-name">{{ propsData.teacher }}</span>
      <span class="lecture-name">{{ propsData.lectureName }}</span>
      <span class="discount-rate">
        {{ `${propsData.discountRate * 100}%` }}
      </span>
      <span class="discounted-price">
        {{ commaAdd(propsData.price * propsData.discountRate) }}
      </span>
      <span class="price">{{ commaAdd(propsData.price) }}</span>
      <br />
      <div class="best-item-info-sub">
        <v-icon color="#1673e9">star</v-icon>
        <span class="star">{{ propsData.star }}</span>
        <span class="review-number">{{ `상품리뷰 ${propsData.review}` }}</span>
        <v-icon color="#c1c1c1" v-if="likeToggle % 2 === 0">favorite</v-icon>
        <v-icon color="#f65d58" v-if="likeToggle % 2 === 1">favorite</v-icon>
        <span class="likes">{{ propsData.likes }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["propsData", "indexData"],
  data() {
    return { likeToggle: 0 }
  },
  methods: {
    /* 숫자 1000단위마다 , 표시하게 하는 함수 */
    commaAdd(num) {
      const regexp = /\B(?=(\d{3})+(?!\d))/g
      return num.toString().replace(regexp, ",")
    },
    /* 좋아요 버튼 누르면 +1 증가, 취소하면 -1 만드는 함수  */
    likePlus(idx) {
      this.likeToggle++
      if (this.likeToggle % 2 === 1) {
        this.$props.propsData.likes =
          parseInt(this.$props.propsData.likes, 10) + parseInt(1, 10)
      } else {
        this.$props.propsData.likes =
          parseInt(this.$props.propsData.likes, 10) - parseInt(1, 10)
      }
    }
  }
}
</script>

<style scoped>
.best-item-body {
  width: 378px;
  display: inline-block;
}
.best-item-img {
  width: 100%;
  height: 267px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  background-size: cover;
  border-radius: 4px;
}
.best-label {
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 60px;
  height: 32px;
  background-color: #e13a3a;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  line-height: 2.1;
}
.like-btn {
  display: block;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  padding-left: 1px;
  padding-top: 2px;
}
.like-btn.active {
  background-color: #e13a3a;
}
.best-item-info {
  width: 100%;
  padding-top: 16px;
  margin-bottom: 80px;
}
.teacher-name {
  color: #666;
  font-size: 14px;
  display: block;
}
.lecture-name {
  color: #212121;
  font-size: 18px;
  font-weight: bold;
  display: block;
}
.discount-rate {
  font-size: 24px;
  font-weight: bold;
  color: #1673e6;
  margin-right: 5px;
}
.discounted-price {
  color: #212121;
  font-size: 24px;
  font-weight: bold;
  margin-right: 5px;
}
.price {
  font-size: 14px;
  color: #c1c1c1;
  text-decoration: line-through;
}
.best-item-info-sub {
  margin: 0;
  padding: 0;
}
.best-item-info-sub > span {
  color: #212121;
  font-size: 16px;
  margin-right: 5px;
}
@media (max-width: 770px) {
  .best-item-info {
    padding-left: 16px;
    padding-right: 16px;
  }
  .like-btn {
    width: 48px;
    height: 48px;
  }
}
</style>
