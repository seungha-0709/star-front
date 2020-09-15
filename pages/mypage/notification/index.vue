<template>
  <div class="notification-page">
    <div>
      <div class="notification">
        <notification-content />
      </div>
    </div>
  </div>
</template>
<script>
  import notificationContents from "../../../components/myPage/notificationContents"
  // 나의 쇼핑 메뉴 중 알림 테이블 콘텐츠 컴포넌트
  export default {
    data() {
      return {}
    },
    components: {
      "notification-content": notificationContents
    }
  }
</script>
<style scoped>
  .notification-page .notification {
    display: block;
  }
</style>
