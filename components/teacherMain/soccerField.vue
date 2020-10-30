<template>
  <div class="background">
    <div class="soccerfield-image">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">
              <img
                src="/img/teacherMain/banner_main_common_common01@2x.png"
                alt="강의 듣기 전엔 별별선생"
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
                alt="강의 듣기 전엔 별별선생"
              />
            </li>
            <li class="glide__slide">
              <img
                src="/img/teacherMain/banner_main_common_speaking01@2x.png"
                alt="강의 듣기 전엔 별별선생"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-box"></div>
  </div>
</template>

<script>
  import Glide from "@glidejs/glide"

  export default {
    link: [
      {
        rel: "stylesheet",
        href: "node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      }
    ],
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
