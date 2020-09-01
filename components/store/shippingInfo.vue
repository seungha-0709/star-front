<template>
  <div class="content">
    <div class="btn-margin">
      <div>
        <h4 class="shipping-title">배송정보 입력</h4>
      </div>
      <receiver />
      <contact-number />
      <div>
        <p class="shipping-notice">
          수강권, 쿠폰, 시리얼 및 e티켓 상품의 경우,
          <br />입력하신 휴대폰번호로 상품이나 SMS가 발송됩니다.
          <br />받으시는 분 휴대폰번호는 타인의 번호로 수신이 불가능합니다. (주문자 명의로 인증하신 휴대폰번호만 수신가능)
          <br />(* 평일 오전11시 이전 주문시 당일, 오전11시 이후 주문시 다음 영업일에 발송됩니다.)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import receiver from "./receiver.vue"
import contactNumber from "./contactNumber.vue"
export default {
  data() {
    return {}
  },
  components: {
    receiver: receiver,
    "contact-number": contactNumber
  }
}
</script>

<style scoped>
.content {
  width: 1120px;
  margin: 0 auto 24px;
  font-family: SpoqaHanSans;
  font-weight: normal;
  color: #212121;
  vertical-align: middle;
  text-align: left;
  background-color: #ffffff;
}
.btn-margin {
  margin-bottom: 48px;
}
.shipping-title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 16px;
  border-bottom: solid 1px #666666;
}
.shipping-notice {
  font-size: 14px;
  color: #8f8f8f;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: solid 1px #dfdfdf;
}
</style>