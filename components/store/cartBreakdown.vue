<template>
  <div class="content">
    <div class="rectangle">
      <table class="breakdown-table">
        <tbody>
          <tr class="title-amount">
            <td class="content-amount quantity">
              수량
              <div class="content-title">1개</div>
            </td>
            <td class="content-amount origin-price">
              상품금액
              <div class="content-title">40000원</div>
            </td>
            <td class="content-amount discount">
              할인금액
              <div class="content-title discount-price">4000원</div>
            </td>
            <td class="content-amount shipping">
              배송비
              <div class="content-title">0원</div>
            </td>
          </tr>
          <tr>
            <td colspan="4" class="total">
              <span>전체 주문금액</span>
              <span class="total-price">36000원</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="order-btn">주문하기</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["result-data"],
  data() {
    console.log("here")
    console.log(this["result-data"])
    return {
      paymentData: []
    }
  },
  computed: {
    productCount() {
      return {}
    }
  },
  watch: {
    resultData() {
      this.paymentData = this.resultData
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
  font-family: SpoqaHanSans;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
}
.rectangle {
  width: 1200px;
  height: 406px;
  margin: 0 auto;
  border-right: solid 1px #dfdfdf;
  border-left: solid 1px #dfdfdf;
  border-bottom: solid 1px #dfdfdf;
  background-color: #ffffff;
}
.breakdown-table {
  margin: 0 40px 48px;
  width: 1120px;
  height: 250px;
}
.title-amount {
  border-top: solid 2px #1673e6;
}
.content-amount {
  width: 280px;
  height: 130px;
  vertical-align: middle;
  border: solid 1px #dfdfdf;
}
.content-amount:not(:last-child) {
  height: 80px;
  border-right: solid 1px #dfdfdf;
}
.content-title {
  font-size: 24px;
  color: #121210;
}
.discount-price {
  color: #e13a3a;
}

.total {
  border: solid 1px #dfdfdf;
  font-size: 24px;
  color: #121210;
  text-align: center;
  vertical-align: middle;
  background-color: #fbfbfb;
}
.total-price {
  color: #1673e6;
  margin-left: 16px;
}
.order-btn {
  width: 240px;
  height: 52px;
  border-radius: 26px;
  background-color: #1673e6;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
}
</style>
