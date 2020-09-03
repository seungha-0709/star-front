<template>
  <div class="content">
    <table class="breakdown-table">
      <tbody>
        <tr class="title-amount outer-border">
          <td class="content-amount quantity">
            <div class="inner-border">
              <div>
                수량
                <div class="content-title">{{ productCount }}개</div>
              </div>
            </div>
          </td>
          <td class="content-amount origin-price">
            <div class="inner-border">
              <div>
                상품금액
                <div class="content-title">{{ `${(productPrice).toLocaleString()}원` }}</div>
              </div>
            </div>
          </td>
          <td class="content-amount discount">
            <div class="inner-border">
              <div>
                <div class="icon-position">
                  <minus-icon size="20" class="icon-add minus-icon"></minus-icon>
                </div>할인금액
                <div class="content-title discount-price">{{ `${(productSale).toLocaleString()}원` }}</div>
              </div>
            </div>
          </td>
          <td class="content-amount shipping">
            <div>
              <div class="icon-position">
                <plus-icon size="20" class="icon-add plus-icon"></plus-icon>
              </div>배송비
              <div class="content-title">{{ `${(productShipping).toLocaleString()}원` }}</div>
            </div>
          </td>
        </tr>
        <tr class="outer-border">
          <td colspan="4" class="total">
            <span>전체 주문금액</span>
            <span
              class="total-price"
            >{{ `${(productPrice+(-productSale)+productShipping).toLocaleString()}원` }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <basic-button text="주문하기" v-on:event="$emit('event')" />
  </div>
</template>
<script>
import { PlusIcon, MinusIcon } from "vue-feather-icons"
import basicButton from "../common/basicButton"

export default {
  components: {
    PlusIcon,
    MinusIcon,
    "basic-button": basicButton
  },
  props: ["result-data", "cart-lists"],
  data() {
    // console.log("here")
    // console.log(this["result-data"])
    return {}
  },
  computed: {
    productCount() {
      return this.resultData.length === 0
        ? 0
        : this.resultData
            .map((data) => this.cartLists[data]?.amount)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
    },
    productPrice() {
      return this.resultData.length === 0
        ? 0
        : this.resultData
            .map((data) => this.cartLists[data]?.originPrice)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
    },
    productSale() {
      return this.resultData.length === 0
        ? 0
        : this.resultData
            .map((data) => this.cartLists[data]?.sale)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
    },
    productShipping() {
      return this.resultData.length === 0
        ? 0
        : this.resultData
            .map((data) => this.cartLists[data]?.shippingFee)
            .reduce((accumulator, currentValue) => accumulator + currentValue)
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
  margin: 0 auto 48px;
  text-align: center;
  vertical-align: middle;
  font-family: SpoqaHanSans;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
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
  position: relative;
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
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  background-color: #fff;
}
.icon-add {
  color: #666;
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
</style>
