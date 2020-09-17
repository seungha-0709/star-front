<template>
  <tbody class="noti-content">
    <tr v-for="(data, index) in content" :key="index">
      <td>{{ index + 1 }}</td>
      <td v-if="data.date">{{ data.date }}</td>
      <td v-if="data.title" class="noti-title">{{ data.title }}</td>
      <td v-if="data.sender">{{ data.sender }}</td>
      <td v-if="data.delete">
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
  </tbody>
</template>

<script>
  import basicButton from "../common/basicButton.vue"
  export default {
    props: ["content"],
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
  }
  .noti-content td {
    vertical-align: middle;
  }
  .noti-title {
    text-align: left;
  }
</style>
