<template>
  <table class="noti-content">
    <tr v-for="(notificationList, index) in notificationLists" :key="index">
      <td>{{ notificationList.id }}</td>
      <td>{{ notificationList.date }}</td>
      <td class="noti-title">{{ notificationList.title }}</td>
      <td>{{ notificationList.sender }}</td>
      <td>
        <basic-button
          text="삭제하기"
          width="74"
          height="28"
          color="#212121"
          fontSize="14"
          borderRadius="4"
          backgroundColor="#ffffff"
          borderColor="#dfdfdf"
          :fontWeight="400"
        />
      </td>
    </tr>
  </table>
</template>

<script>
  import { notificationLists } from "../myPage/notificationLists.js"
  import basicButton from "../common/basicButton.vue"
  export default {
    data() {
      return {
        notificationLists
      }
    },
    components: {
      "basic-button": basicButton
    }
  }
</script>

<style scoped>
  .noti-content {
    width: 844px;
    height: 42px;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    color: #666666;
  }
  .noti-content tr {
    height: 42px;
    width: 100%;
    border-bottom: solid 1px #dfdfdf;
    vertical-align: middle;
  }
  .noti-title {
    text-align: left;
  }
</style>
