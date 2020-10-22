<template>
  <div class="background">
    <div class="layer"></div>
    <div class="content">
      <div>별별선생에는 <strong> 지금 이 순간</strong>에도</div>
      <div>
        <span>113,589</span> 강사의 <span>270,178</span>개 리뷰가 작성되고
        있습니다.
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-image: url(/img/teacherMain/banner_counting01_bg01@2x.png);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: rgba(63, 96, 204, 0.94);
  }
  .content {
    position: relative;
    z-index: 10;
    margin: 0 auto;
    padding: 0;
    height: 100%;
  }
  .content div:first-child {
    width: 266px;
    height: 29px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    letter-spacing: -0.25;
    margin: 60px auto 30px auto;
  }
  .content div:first-child strong {
    font-weight: bold;
  }
  .content div:last-child {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /* align-items: flex-end; */
    font-size: 22px;
    text-align: center;
    line-height: 8px;
    color: #fff;
    height: 54px;
  }
  .content div:last-child span {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.45;
    line-height: 0;
  }
</style>
