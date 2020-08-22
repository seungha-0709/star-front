<template>
  <button type="button" class="btn-store" @click="$router.push('store')">
    <img src="/img/logo/logo_square_white.png" alt="심볼 로고" />
    별별스토어
  </button>
</template>

<script>
  export default {}
</script>

<style scoped>
  .btn-store {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 157px;
    height: 42px;
    border-radius: 23px;
    background-image: linear-gradient(255deg, #5e3fcc, #3f60cc);
    font-size: 18px;
    color: #fff;
    margin: 0 26px;
  }
  .btn-store img {
    width: 24px;
    margin-right: 8px;
  }
</style>
