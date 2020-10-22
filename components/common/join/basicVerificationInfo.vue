<template>
  <div class="verification-info">
    <div class="type">
      {{ name }}
    </div>
    <input
      :style="{
        width: width
      }"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
  export default {
    data() {},
    props: {
      name: {
        default: ""
      },
      width: {
        default: "100%"
      },
      type: {
        default: ""
      },
      placeholder: {
        default: ""
      }
    }
  }
</script>
<style scoped>
  .verification-info {
    text-align: left;
    margin-bottom: 16px;
  }
  .verification-info .type {
    font-size: 14px;
    font-weight: bold;
    color: #212121;
  }
  .verification-info input {
    height: 52px;
    font-size: 16px;
    border-bottom: 1px solid #dfdfdf;

    padding: 14px 0 14px;
  }
  .verification-info input::placeholder {
    color: #c1c1c1;
  }
</style>
