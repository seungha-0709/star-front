<template>
  <div class="banner-box">
    <ul class="slide-list">
      <li
        v-for="(item, index) in 4"
        :key="index"
        :style="{
          opacity: bannerIndex === index ? 1 : 0,
          backgroundImage: `url('/img/banner/bg_lv0_main0${index + 1}@2x.webp')`
        }"
        @mouseenter="handleStopSlide"
        @mouseleave="handleStartSlide"
      >
        <div class="title-container">
          <div class="title-box">
            <h2>듣고싶은 강의, 어렵게 찾지말고 별별스토어로!</h2>
            <a href=""
              >자세히 보기 <chevron-right-icon size="20" color="#fff"
            /></a>
          </div>
        </div>
      </li>
    </ul>
    <button type="button" class="btn-prev" @click="handlePrevSlide">
      <chevron-left-icon
        size="30"
        color="#666"
        class="arrow-icon"
        :style="{ position: 'absolute', left: 10 }"
      ></chevron-left-icon>
    </button>
    <button type="button" class="btn-next" @click="handleNextSlide">
      <chevron-right-icon
        size="30"
        color="#666"
        class="arrow-icon"
        :style="{ position: 'absolute', right: 10 }"
      ></chevron-right-icon>
    </button>
    <ol class="slide-pagination">
      <li
        v-for="(item, index) in 4"
        :key="index"
        :class="{ active: bannerIndex === index }"
        @click="handleSelectSlide(index)"
      ></li>
    </ol>
    <div class="review-live-container">
      <review-live></review-live>
    </div>
  </div>
</template>

<script>
  import { ChevronLeftIcon, ChevronRightIcon } from "vue-feather-icons"
  import reviewLive from "./reviewLive"

  export default {
    data() {
      return {
        bannerIndex: 0,
        intervalFunction: null
      }
    },
    components: {
      ChevronLeftIcon,
      ChevronRightIcon,
      "review-live": reviewLive
    },
    methods: {
      handleStartSlide() {
        this.intervalFunction = setInterval(() => {
          if (this.bannerIndex < 3) {
            this.bannerIndex += 1
          } else {
            this.bannerIndex = 0
          }
        }, 3000)
      },
      handleStopSlide() {
        clearInterval(this.intervalFunction)
      },
      handlePrevSlide() {
        this.handleStopSlide()
        this.bannerIndex = this.bannerIndex - 1
      },
      handleNextSlide() {
        this.handleStopSlide()
        this.bannerIndex = this.bannerIndex + 1
      },
      handleSelectSlide(index) {
        this.handleStopSlide()
        this.bannerIndex = index
      }
    },
    created() {
      this.handleStartSlide()
    },
    updated() {
      if (this.bannerIndex < 0 || this.bannerIndex > 3) {
        return (this.bannerIndex = 0)
      }
    }
  }
</script>

<style scoped>
  .banner-box {
    position: relative;
    width: 100%;
    height: 460px;
  }
  .banner-box .slide-list {
    display: flex;
    height: 100%;
  }
  .banner-box .slide-list li {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: opacity 0.5s;
  }
  .banner-box .slide-list li .title-container {
    position: absolute;
    left: 50%;
    top: 0;
    width: 1240px;
    height: 100%;
    transform: translateX(-50%);
  }
  .banner-box .slide-list li .title-box {
    position: absolute;
    left: 0;
    bottom: 48px;
  }
  .banner-box .slide-list li .title-box h2 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }
  .banner-box .slide-list li .title-box a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }
  .banner-box .btn-prev,
  .banner-box .btn-next {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    transform: translateY(-50%);
  }
  .banner-box .btn-prev {
    border-right: 60px solid rgba(255, 255, 255, 0.6);
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    left: 0;
  }
  .banner-box .btn-next {
    border-left: 60px solid rgba(255, 255, 255, 0.6);
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    right: 0;
  }
  .banner-box .slide-pagination {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 48px;
    transform: translateX(-50%);
    z-index: 1;
  }
  .banner-box .slide-pagination li {
    width: 10px;
    height: 10px;
    opacity: 0.5;
    background-color: #fff;
    margin: 0 6px;
    border-radius: 50%;
    cursor: pointer;
  }
  .banner-box .slide-pagination li.active {
    opacity: 1;
  }
  .review-live-container {
    position: absolute;
    width: 1240px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
</style>
