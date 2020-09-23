<template>
  <div>
    <input type="text" placeholder="공백 없이 입력해 주세요." />
    <p>존재하지 않는 코드입니다. 다시 확인해 주세요.</p>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  input {
    margin-top: 46px;
    width: 100%;
    height: 46px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    background-color: #fff;
    color: #212121;
    padding: 11px 16px;
    font-size: 16px;
  }
  input::placeholder {
    color: #c1c1c1;
  }
  p {
    margin-top: 12px;
    font-size: 14px;
    color: #e13a3a;
  }
</style>
