<template>
  <div class="profile-main">
    <header>
      <div>
        <h1>오로라 선생님</h1>
        <div class="title-score">
          <div class="number-score">
            <div>
              <span class="score">9.5</span><span class="total-score">/10</span>
            </div>
            <div class="star-score">별별별별별</div>
          </div>
        </div>
      </div>
      <h2>노력은 배신하지 않습니다.</h2>
    </header>
    <main>
      <div class="main-side">
        <div class="picture"></div>
        <div class="button-wrap">
          <basic-button
            width="280px"
            borderRadius="4px"
            backgroundColor="#3f60cc"
            text="팔로우하고 더 많은 자료 보기"
            fontWeight="normal"
          />
          <basic-button
            width="280px"
            borderRadius="4px"
            backgroundColor="#ffffff"
            color="#212121"
            text="수강신청하기"
            borderColor="#dfdfdf"
            fontWeight="normal"
          />
        </div>
      </div>
      <div class="review-live">
        <review-live />
      </div>
    </main>
  </div>
</template>

<script>
  import reviewLive from "./reviewLive.vue"
  import basicButton from "../common/basicButton.vue"
  export default {
    components: {
      reviewLive,
      basicButton
    }
  }
</script>

<style scoped>
  .profile-main {
    width: 924px;
    border: 1px solid #dfdfdf;
    background: #fff;
    padding: 40px;
    box-sizing: border-box;
  }
  header {
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 15px;
    box-sizing: border-box;
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #212121;
  }
  h2 {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
  header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 41px;
  }
  .number-score {
    display: flex;
    align-items: center;
  }
  .score {
    font-size: 40px;
    color: #212121;
    font-weight: bold;
  }
  .total-score {
    font-size: 14px;
    color: #666;
  }

  main {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .picture {
    width: 280px;
    height: 280px;
    background: #eeeff4;
  }
  .button-wrap {
    margin-top: 16px;
    width: 280px;
    height: 112px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
</style>
