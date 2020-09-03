<template>
  <div class="contact-content">
    <div class="contact">
      <div class="contact-number">
        <div class="phone">휴대폰번호</div>
        <div class="input-box">
          <input class="contact-input" type="number" placeholder="010" />
          <input class="contact-input" type="number" placeholder="1234" />
          <input class="contact-input" type="number" placeholder="1234" />
          <!-- placeholder 말고 text 로 해야할듯..? 우선 placeholder custom을 더 찾아보자능..  -->
          <button class="verify-num">인증번호 받기</button>
        </div>
      </div>
      <div class="verify">
        <input class="verify-input" type="number" placeholder="인증번호 입력" />
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
.contact-content {
  width: 100%;
  height: 156px;
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
  padding: 24px 0;
  border-bottom: solid 1px #dfdfdf;
}
.contact input {
  height: 46px;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  margin-right: 8px;
  padding-left: 16px;
}
.contact input::placeholder {
  color: #c1c1c1;
  text-align: left;
}
.contact-number {
  display: flex;
  text-align: center;
  height: 46px;
  margin-bottom: 16px;
}
.phone {
  height: 46px;
  margin: 11px 4px 0 0;
}
.input-box {
  margin-left: 44px;
}
.contact-input {
  width: 80px;
  text-align: center;
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
  margin-left: 118px;
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