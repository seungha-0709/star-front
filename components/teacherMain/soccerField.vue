<template>
  <div class="background">
    <div class="soccerfield-image">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img
                src="/img/teacherMain/banner_main_common_common01@2x.png"
                alt="나에게 맞는 선생님 찾기"
              />
            </li>
            <li class="glide__slide">
              <img
                src="/img/teacherMain/banner_main_common_common02@2x.png"
                alt="강의 듣기 전엔 별별선생"
              />
            </li>
            <li class="glide__slide">
              <img
                src="/img/teacherMain/banner_main_common_eng01@2x.png"
                alt="토익, 텝스 시험 정보"
              />
            </li>
            <li class="glide__slide">
              <img
                src="/img/teacherMain/banner_main_common_speaking01@2x.png"
                alt="나에게 맞는 스피킹 유형"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-box">
      <input type="text" placeholder="강사명을 입력해주세요." />
      <basic-button
        width="120px"
        height="42px"
        fontWeight="normal"
        backgroundColor="#3f60cc"
        text="빠른검색"
      />
      <div class="line"></div>
      <basic-button
        width="120px"
        height="42px"
        fontWeight="normal"
        backgroundColor="#fff"
        color="#212121"
        borderColor="#dfdfdf"
        text="상세검색"
      />
    </div>
  </div>
</template>

<script>
  import Glide from "@glidejs/glide"
  import basicButton from "../../components/common/basicButton.vue"

  export default {
    link: [
      {
        rel: "stylesheet",
        href: "node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      }
    ],
    components: {
      basicButton
    },
    mounted() {
      new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true
      }).mount()
    }
  }
</script>

<style scoped>
  .background {
    margin: 0 4px 4px 0;
  }
  .soccerfield-image {
    width: 720px;
    height: 533px;
    border: 1px solid #dfdfdf;
  }
  .search-box {
    width: 720px;
    height: 74px;
    border: 1px solid #dfdfdf;
    padding: 16px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .line {
    border-left: 1px solid #dfdfdf;
    height: 42px;
    margin: 0 32px;
  }
  input {
    width: 335px;
    height: 42px;
    margin-right: 16px;
    border-bottom: 1px solid #dfdfdf;
  }
  input::placeholder {
    color: #c1c1c1;
    font-size: 14px;
  }
  .soccerfield-image img {
    width: 720px;
    height: 533px;
  }
  .glide {
    overflow: hidden;
  }
  .glide__slides {
    display: flex;
  }
</style>
