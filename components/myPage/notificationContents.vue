<template>
  <table class="noti-content">
    <tr v-for="(notification, index) in notifications" :key="index">
      <td>{{ notification.id }}</td>
      <td>{{ notification.date }}</td>
      <td class="noti-title">{{ notification.title }}</td>
      <td>{{ notification.sender }}</td>
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
  import { notifications } from "../myPage/notifications.js"
  import basicButton from "../common/basicButton.vue"
  export default {
    data() {
      return {
        notifications
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
  .noti-title {
    text-align: left;
  }
</style>
