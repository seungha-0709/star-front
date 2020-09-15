<template>
  <div>
    <div class="my-page">
      <div class="left-menu">
        <sidebar-menu title="마이페이지" :menu="myPageMenu">
          <user-icon size="24" color="#dfdfdf" />
        </sidebar-menu>
        <sidebar-menu title="나의 쇼핑" :menu="myShoppingMenu">
          <shopping-bag-icon size="24" color="#dfdfdf" />
        </sidebar-menu>
        <status />
      </div>
      <div class="notification">
        <notification-content />
      </div>
    </div>
  </div>
</template>
<script>
  import sidebarMenu from "../../components/common/sidebarMenu.vue"
  // 좌측 사이드바 메뉴 컴포넌트
  import status from "../../components/common/status.vue"
  // 사이드바 메뉴 하단 로그아웃 상태 컴포넌트

  import { myPageMenu, myShoppingMenu } from "../../assets/data/sidebar"
  // 사이드바 메뉴 서브타이틀 데이터
  import { UserIcon, ShoppingBagIcon } from "vue-feather-icons"

  export default {
    data() {
      return {
        myPageMenu,
        myShoppingMenu
      }
    },
    components: {
      "sidebar-menu": sidebarMenu,
      status: status,
      UserIcon,
      ShoppingBagIcon
    }
  }
</script>
<style scoped>
  .my-page {
    display: flex;
    width: 1200px;
    margin: 32px auto 0;
    text-align: center;
  }
  .my-page .left-menu {
    display: block;
  }
  .my-page .notification {
    display: block;
  }
</style>
