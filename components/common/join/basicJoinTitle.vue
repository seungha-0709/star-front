<template>
  <div class="basic-join" :class="$mq">
    <div class="logo-wrap">
      <div class="logo">
        <img src="/img/logo/logo_square_gray.png" alt="별별선생 로고" />
      </div>
    </div>
    <div class="join-title">
      <span class="main-title">{{ title }} </span>
      <span class="subtitle">{{ subtitle }}</span>
    </div>
    <div class="description-wrap">
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        default: ""
      },
      subtitle: {
        default: ""
      },
      description: {
        default: ""
      }
    }
  }
</script>
<style scoped>
  .basic-join {
    text-align: center;
    vertical-align: middle;
    font-weight: normal;
  }
  .basic-join .logo img {
    width: 42px;
    height: 41px;
    margin-bottom: 4px;
  }
  .basic-join .join-title {
    height: 59px;
    font-size: 40px;
  }
  .basic-join .main-title {
    color: #3f60cc;
    font-weight: bold;
  }
  .basic-join .subtitle {
    color: #212121;
  }
  .basic-join .description {
    font-size: 20px;
    color: #666666;
    padding-top: 17px;
  }
  /* 반응형 구현 */
  .basic-join.mobile .mobile-off {
    display: none;
  }
  .basic-join.mobile .logo-wrap {
    width: 100%;
    height: 56px;
    padding: 16px;
    background-color: #ffffff;
    border: solid 1px #dfdfdf;
    text-align: left;
  }
  .basic-join.mobile .logo img {
    width: 24px;
    height: 24px;
    margin-bottom: 0px;
  }
  .basic-join.mobile .join-title {
    height: 0px;
  }
  .basic-join.mobile .main-title {
    display: none;
  }
  .basic-join.mobile .subtitle {
    position: relative;
    font-size: 18px;
    font-weight: bold;
    color: #212121;
    top: -64px;
  }
  .basic-join.mobile .description-wrap {
    display: flex;
    height: 110px;
    align-items: center;
  }
  .basic-join.mobile .description {
    padding-top: 0;
    margin: 0 auto;
    width: 203px;
    font-size: 16px;
    color: #212121;
  }
</style>
