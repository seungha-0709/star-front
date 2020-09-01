<template>
  <div class="content">
    <div class="contact">
      <div class="contact-number">
        <div class="phone">휴대폰번호</div>
        <div class="input-box">
          <input class="contact-input" type="text" name="number" size="80" placeholder="010" />
          <input class="contact-input" type="text" name="number" size="80" placeholder="1234" />
          <input class="contact-input" type="text" name="number" size="80" placeholder="1234" />
          <button class="verify-num">인증번호 받기</button>
        </div>
      </div>
      <div class="verify">
        <input class="verify-input" type="text" name="number" size="200" placeholder="인증번호 입력" />
        <button class="verifying">인증하기</button>
      </div>
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
.content {
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
.contact {
  font-weight: bold;
  margin-left: 40px;
  padding-bottom: 24px;
  border-bottom: solid 1px #dfdfdf;
}
.contact input {
  height: 46px;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  color: #c1c1c1;
  margin-right: 8px;
}
.contact-number {
  display: flex;
  text-align: center;
  height: 86px;
}
.phone {
  margin-top: 35px;
}
.input-box {
  margin: 24px 0 0 44px;
}
.contact-input {
  width: 80px;
}
.verify-num {
  margin-left: 8px;
  width: 124px;
  height: 46px;
  border-radius: 4px;
  border: solid 1px #1673e6;
  color: #1673e6;
}

.verify {
  display: flex;
  margin-left: 113px;
}
.verify-input {
  width: 200px;
}
.verifying {
  width: 91px;
  height: 46px;
  border-radius: 4px;
  color: #8f8f8f;
  background-color: #ececec;
  margin-left: 8px;
}
</style>