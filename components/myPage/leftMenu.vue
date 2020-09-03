<template>
  <div class="content">
    <div class="rectangle">
      <div class="title">
        <span class="menu-icon">img</span>
        <h4 class="my-page">마이페이지</h4>
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
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.content {
  width: 260px;
  height: 240px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #212121;
}
.rectangle {
  width: 100%;
  height: 100%;
  padding: 32px 24px 8px;
}
.title {
  margin-bottom: 8px;
}
.my-page {
  font-size: 24px;
  font-weight: normal;
  color: #666666;
  margin-left: 8px;
}
.sub-title {
  width: 212px;
  border-bottom: solid 1px #ececec;
}
/* .sub-menu {
} */
.menu-icon {
  width: 24px;
  height: 27px;
}
</style>