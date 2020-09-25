<template>
  <div class="board-detail">
    <div class="counsel-header">
      <span class="type">{{ type }}</span>
      <h5 class="counsel-title">{{ title }}</h5>
    </div>
    <div class="counsel-info">
      <div class="writer">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="profile img"
        />
        <span class="name">{{ writer }}</span>
      </div>
      <div class="date">
        {{ date }}
      </div>
      <div class="modifing">
        <span>수정하기</span>
        <span class="divider"></span>
        <span>삭제하기</span>
      </div>
    </div>
    <div class="content">
      <p>
        {{ counsel }}
      </p>
    </div>
    <basic-button
      class="button"
      text="목록보기"
      width="76"
      height="28"
      color="#212121"
      fontSize="14"
      border-radius="14"
      background-color="#ffffff"
      borderColor="#dfdfdf"
      fontWeight="400"
      v-on:href="mypage / counsel"
    />
    <!-- 클릭시 목록으로(/mypge/counsel) -->
  </div>
</template>
<script>
  import basicButton from "../common/basicButton.vue"
  export default {
    props: {
      type: {
        default: ""
      },
      title: {
        default: ""
      },
      writer: {
        default: ""
      },
      date: {
        default: ""
      },
      counsel: {
        default: ""
      }
    },
    components: {
      "basic-button": basicButton
    }
  }
</script>
<style scoped>
  .board-detail {
    width: 844px;
    font-size: 14px;
    font-weight: normal;
    color: #212121;
    vertical-align: middle;
    background-color: #ffffff;
  }
  .board-detail .counsel-header {
    font-size: 20px;
    font-weight: bold;
  }
  .board-detail .type {
    color: #1673e6;
  }
  .board-detail .counsel-title {
    display: inline-block;
    width: 746px;
    margin-left: 16px;
    text-align: left;
  }
  .board-detail .counsel-info {
    display: flex;
    width: 100%;
    margin: 13px 0 24px;
    padding-bottom: 26px;
    border-bottom: solid 1px #ececec;
  }
  .board-detail .writer {
    text-align: left;
  }
  .board-detail .writer img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    border-radius: 12px;
  }
  .board-detail .writer .name {
    position: relative;
    top: -8px;
  }
  /* max-width로 margin 줘야함 */
  .board-detail .date {
    margin: 0 24px 0 500px;
  }
  .board-detail .modifing {
    color: #666666;
  }
  .board-detail .divider {
    display: inline-block;
    width: 1px;
    height: 10px;
    background-color: #dfdfdf;
    margin: 0 10px;
  }
  .board-detail .content {
    font-size: 16px;
  }
  .board-detail .button {
    margin-top: 48px;
  }
</style>
