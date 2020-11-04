<template>
  <div class="wrap" :style="{ width: width, height: height }">
    <img src="/img/teacherMain/shape@2x.png" alt="좋아요" />
    <span>{{ number }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      number: {
        default: "9999+"
      },
      width: {
        default: "110px"
      },
      height: {
        default: "42px"
      }
    }
  }
</script>

<style scoped>
  .wrap {
    border: 1px solid #dfdfdf;
    border-radius: 26px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .wrap img {
    width: 18px;
    height: 18px;
  }
  .wrap span {
    font-size: 14px;
    color: #3f60cc;
  }
</style>
