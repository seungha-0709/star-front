<template>
  <div class="content">
    <div>
      <h4 class="shipping-title">배송정보 입력</h4>
    </div>
    <receiver />
    <contact-number />
    <div>
      <p class="shipping-notice">
        수강권, 쿠폰, 시리얼 및 e티켓 상품의 경우,
        <br />입력하신 휴대폰번호로 상품이나 SMS가 발송됩니다. <br />받으시는 분
        휴대폰번호는 타인의 번호로 수신이 불가능합니다. (주문자 명의로 인증하신
        휴대폰번호만 수신가능) <br />(* 평일 오전11시 이전 주문시 당일, 오전11시
        이후 주문시 다음 영업일에 발송됩니다.)
      </p>
    </div>
    <div class="btn-order-box">
      <basic-button text="결제하기" backgroundColor="#e13a3a" />
    </div>
  </div>
</template>

<script>
  import receiver from "./receiver.vue"
  import contactNumber from "./contactNumber.vue"
  import basicButton from "../common/basicButton"

  export default {
    data() {
      return {}
    },
    components: {
      receiver: receiver,
      "contact-number": contactNumber,
      "basic-button": basicButton
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
  .btn-order-box {
    text-align: center;
    margin: 48px 0;
  }
</style>
