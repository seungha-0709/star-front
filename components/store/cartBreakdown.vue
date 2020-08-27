<template>
  <div class="content">
    <div class="rectangle">
      <table class="breakdown-table">
        <tbody>
          <tr class="title-amount outer-border">
            <td class="content-amount quantity">
              <div class="inner-border">
                <div>
                  수량
                  <div class="content-title">1개</div>
                </div>
              </div>
            </td>
            <td class="content-amount origin-price">
              <div class="inner-border">
                <div>
                  상품금액
                  <div class="content-title">{{ `${(40000).toLocaleString()}원` }}</div>
                </div>
              </div>
            </td>
            <td class="content-amount discount">
              <div class="inner-border">
                <div>
                  <div class="icon-position">
                    <minus-circle-icon size="1.5x" class="icon-add minus-icon"></minus-circle-icon>
                  </div>할인금액
                  <div class="content-title discount-price">{{ `${(4000).toLocaleString()}원` }}</div>
                </div>
              </div>
            </td>
            <td class="content-amount shipping">
              <div>
                <div class="icon-position">
                  <plus-circle-icon size="1.5x" class="icon-add plus-icon"></plus-circle-icon>
                </div>배송비
                <div class="content-title">{{ `${(0).toLocaleString()}원` }}</div>
              </div>
            </td>
          </tr>
          <tr class="outer-border">
            <td colspan="4" class="total">
              <span>전체 주문금액</span>
              <span class="total-price">{{ `${(36000).toLocaleString()}원` }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="order-btn">주문하기</button>
    </div>
  </div>
</template>
<script>
import { PlusCircleIcon, MinusCircleIcon } from "vue-feather-icons"

export default {
  components: {
    PlusCircleIcon,
    MinusCircleIcon
  },
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
  background-color: #ffffff;
}
.breakdown-table {
  margin: 0 40px 48px;
  width: 1120px;
  height: 250px;
}
.outer-border {
  border: solid 1px #dfdfdf;
}
.title-amount {
  height: 130px;
  border-top: solid 2px #1673e6;
}
.content-amount {
  width: 280px;
  /* vertical-align: middle; */
}
.inner-border {
  height: 80px;
  border-right: solid 1px #dfdfdf;
  margin-top: 25px;
  padding-top: 8px;
}
.icon-position {
  position: relative;
}
.icon-add {
  position: absolute;
  top: 18px;
  left: -15.5px;
  width: 30px;
  height: 30px;
  color: #dfdfdf;
  stroke-width: 1px;
}
.content-title {
  font-size: 24px;
  color: #121210;
}
.discount-price {
  color: #e13a3a;
}
.total {
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
