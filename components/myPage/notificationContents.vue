<template>
  <table class="noti-content">
    <tr>
      <td>10</td>
      <td>2020-03-13 10:30</td>
      <td class="noti-title">[결제확인] 주문번호 23451 결제완료</td>
      <td>고객센터</td>
      <td>
        <basic-button
          width="166"
          height="24"
          color="#212121"
          fontSize="14"
          borderRadius="22"
          backgroundColor="#ffffff"
          borderColor="#dfdfdf"
        />
      </td>
    </tr>
  </table>
</template>

<script>
  import basicButton from "../common/basicButton.vue"
  export default {
    data() {
      return {}
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
