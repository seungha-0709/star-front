<template>
  <div class="receiver-content">
    <div class="receiver">
      받으시는 분
      <input type="text" placeholder="이름 입력" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.receiver-content {
  width: 100%;
  margin: 0 auto;
  font-family: SpoqaHanSans;
  font-weight: normal;
  color: #212121;
  vertical-align: middle;
  text-align: left;
  font-size: 16px;
  background-color: #ffffff;
}
.receiver {
  font-weight: bold;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: solid 1px #dfdfdf;
}
.receiver input {
  width: 200px;
  height: 46px;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  margin-left: 40px;
  padding-left: 16px;
}

.receiver input::placeholder {
  color: #c1c1c1;
  text-align: left;
}
</style>
