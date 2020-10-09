<template>
  <div class="profile-side-bar">
    <ul>
      <li><home-icon size="1x" class="home icon" />홈</li>
      <li><star-icon size="1x" class="star icon" />청정리뷰 보기</li>
      <li>강사리뷰</li>
      <li>환승후기</li>
      <li><check-circle-icon size="1x" class="check icon" />합격후기</li>
      <li><message-circle-icon size="1x" class="message icon" />Q&A</li>
    </ul>
  </div>
</template>

<script>
import { HomeIcon, StarIcon, CheckCircleIcon, MessageCircleIcon } from 'vue-feather-icons'
  export default {
    components: {
      HomeIcon,
      StarIcon,
      CheckCircleIcon,
      MessageCircleIcon
    }

  }
</script>

<style scoped>
  .profile-side-bar {
    width: 260px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 4px 24px;
    box-sizing: border-box;
  }
  li {
    font-size: 16px;
    color: #212121;
    font-weight: bold;
    height: 52px;
    display: flex;
    align-items: center;
    background: #fff;;
  }
  li:hover {
    color: #3f60cc;
  }
  li:nth-child(1) {
    border-bottom: 1px solid #dfdfdf;
  }
  li:nth-child(5),li:nth-child(6) {
    border-top: 1px solid #dfdfdf;
  }
  li:nth-child(3),li:nth-child(4) {
    height: 42px;
  }
  li:nth-child(4) {
    margin-bottom: 5px;
  }
  li:nth-child(3)::before,li:nth-child(4)::before {
    content:'   ';
    width: 10px;
    height: 10px;
    border-left: 1px solid #c1c1c1;
    border-bottom: 1px solid #c1c1c1;
    margin-left: 8px;
    margin-right: 12px;
  }
  .icon {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background: rgba(193, 193, 193, 0.2);
    color: #c1c1c1;
    margin-right: 12px;
  }
  li:hover .icon {
    background: rgba(93, 126, 233, 0.2);
    color: #5d7ee9;
  }
</style>