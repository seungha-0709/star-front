<template>
  <div class="move-site-search-box">
    <h2>어떤 선생님, 학원, 시험을 찾으세요?</h2>
    <div class="search-box">
      <input type="text" placeholder="검색어 입력 영역입니다." />
      <button type="button">
        <search-icon size="32" class="search-icon"></search-icon>
      </button>
    </div>
    <ul class="move-site-list">
      <li v-for="(item, index) in menuData" :key="index">
        <nuxt-link :to="item.sub[0].route">
          <div class="circle">
            <img :src="`/img/lv0/${levelIcon(index)}`" alt="" />
          </div>
          <span class="site-name">{{ item.title }}</span>
        </nuxt-link>
      </li>
      <li class="star-store">
        <nuxt-link :to="'/'">
          <div class="circle">
            <img src="/img/logo/logo_square_white.png" alt="" />
          </div>
          <span class="site-name">별별스토어</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { SearchIcon } from "vue-feather-icons"
  import { gnbMenu } from "../common/header/headerData.js"

  export default {
    data() {
      return {
        menuData: gnbMenu
      }
    },
    components: {
      SearchIcon
    },
    computed: {
      levelIcon() {
        return (index) => {
          switch (this.menuData[index].title) {
            case "공무원":
              return "icon_gong.png"
            case "영어":
              return "icon_english.png"
            case "유치원":
              return "icon_kindergarten.png"
            case "수능/내신":
              return "icon_csat.png"
            case "취업/자격증":
              return "icon_certificate.png"
            case "외국어":
              return "icon_language.png"
            case "대학원/편입":
              return "icon_university.png"
            case "임용/기타고시":
              return "icon_appointment.png"
            case "교수":
              return "icon_professor.png"
            default:
              return null
          }
        }
      }
    }
  }
</script>

<style scoped>
  .move-site-search-box {
    width: 1180px;
    padding: 120px 0;
    text-align: center;
  }
  .move-site-search-box > h2 {
    font-size: 32px;
    font-weight: 700;
  }
  .move-site-search-box .search-box {
    display: flex;
    align-items: center;
    width: 1000px;
    height: 76px;
    padding: 18px 24px;
    margin: 32px auto 48px;
    border-radius: 44px;
    border: 3px solid #3f60cc;
  }
  .move-site-search-box .search-box input[type="text"] {
    width: 100%;
    height: 100%;
    font-size: 28px;
    padding-right: 8px;
  }
  .move-site-search-box .search-box .search-icon {
    color: #3f60cc;
    vertical-align: top;
  }
  .move-site-search-box .move-site-list {
    display: flex;
    justify-content: space-between;
  }
  .move-site-search-box .move-site-list li {
  }
  .move-site-search-box .move-site-list li a {
    text-decoration: none;
    color: #212121;
  }
  .move-site-search-box .move-site-list li .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background-color: #f6f8fc;
    margin-bottom: 8px;
  }
  .move-site-search-box .move-site-list li.star-store .circle {
    background-color: #1673e6;
  }
  .move-site-search-box .move-site-list li .circle img {
    width: 24px;
  }
  .move-site-search-box .move-site-list li:nth-of-type(4) .circle img,
  .move-site-search-box .move-site-list li:nth-of-type(6) .circle img,
  .move-site-search-box .move-site-list li:nth-of-type(7) .circle img,
  .move-site-search-box .move-site-list li:nth-of-type(8) .circle img,
  .move-site-search-box .move-site-list li:nth-of-type(9) .circle img {
    width: 32px;
  }
  .move-site-search-box .move-site-list li:nth-of-type(2) .circle img {
    width: 34px;
  }
  .move-site-search-box .move-site-list li .site-name {
    font-size: 14px;
  }
  .move-site-search-box .move-site-list li.star-store .site-name {
    font-weight: 700;
  }
</style>
