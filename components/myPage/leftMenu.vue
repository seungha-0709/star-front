<template>
  <div class="content-menu">
    <div class="rectangle">
      <div class="title">
        <span class="menu-icon"><user-icon class="user-icon" /></span>
        <h4 class="my-page-title">마이페이지</h4>
      </div>
      <div>
        <h5 class="sub-title sub-menu">프로필</h5>
        <h5 class="sub-title sub-menu">기본정보</h5>
        <h5 class="sub-menu">팔로우</h5>
      </div>
    </div>
  </div>
</template>
<script>
  import { UserIcon } from "vue-feather-icons"

  export default {
    data() {
      return {}
    },
    components: {
      UserIcon
    }
  }
</script>

<style scoped>
  .content-menu {
    width: 260px;
    height: 240px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    margin: 0 16px 8px 0;
    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: #212121;
  }
  .content-menu .rectangle {
    width: 100%;
    height: 100%;
    padding: 32px 24px 8px;
  }
  .content-menu .title {
    margin-bottom: 8px;
  }
  .my-page-title {
    display: inline-block;
    font-size: 24px;
    font-weight: normal;
    color: #666666;
    margin-left: 8px;
  }
  .content-menu .sub-title {
    width: 212px;
    border-bottom: solid 1px #ececec;
  }
  .sub-menu {
    height: 52px;
    padding: 14px 0 14px;
  }
  .content-menu .menu-icon {
    width: 24px;
    height: 36px;
    padding: 4px 0 5px;
  }
  .content-menu .user-icon {
    color: #dfdfdf;
  }
</style>
