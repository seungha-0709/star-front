<template>
  <div class="profile-side-bar">
    <ul>
      <li v-for="(item, index) in menuData" :key="index">
        <span v-if="item.iconType === 'home'"
          ><home-icon size="1x" class="home icon"
        /></span>
        <span v-if="item.iconType === 'cleanReview'"
          ><star-icon size="1x" class="star icon"
        /></span>
        <span v-if="item.iconType === 'pass'"
          ><check-circle-icon size="1x" class="check icon"
        /></span>
        <span v-if="item.iconType === 'qna'"
          ><message-circle-icon size="1x" class="message icon"
        /></span>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    HomeIcon,
    StarIcon,
    CheckCircleIcon,
    MessageCircleIcon
  } from "vue-feather-icons"
  import { menuData } from "../../assets/data/teacher/teacherSideMenu.js"

  export default {
    data() {
      return {
        menuData
      }
    },
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
    background: #fff;
  }
  li:hover {
    color: #3f60cc;
  }
  li:nth-child(1) {
    border-bottom: 1px solid #dfdfdf;
  }
  li:nth-child(5),
  li:nth-child(6) {
    border-top: 1px solid #dfdfdf;
  }
  li:nth-child(3),
  li:nth-child(4) {
    height: 42px;
  }
  li:nth-child(4) {
    margin-bottom: 5px;
  }
  li:nth-child(3)::before,
  li:nth-child(4)::before {
    content: "   ";
    width: 10px;
    height: 10px;
    border-left: 1px solid #c1c1c1;
    border-bottom: 1px solid #c1c1c1;
    margin-left: 8px;
    margin-right: 12px;
  }
  li > span {
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background: rgba(193, 193, 193, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
  }
  .icon {
    color: #c1c1c1;
  }
  li:hover .icon {
    color: #5d7ee9;
  }
  li:hover span {
    background: rgba(93, 126, 233, 0.2);
  }
</style>
