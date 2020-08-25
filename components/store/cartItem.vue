<template>
  <div class="content">
    <div class="rectangle">
      <div>
        <h3 class="cart-name">장바구니</h3>
        <p class="cart-count">{{ `총 ${cartlists.length}개`}}</p>
        <div>
          <table class="cart-table">
            <thead>
              <tr class="table-header">
                <th class="tb-checkbox">
                  <input
                    class="checkbox"
                    type="checkbox"
                    v-model="selectAll"
                    v-on:click="selectAllItems"
                  />
                </th>
                <th class="select-all">전체선택</th>
                <th class="th-title">상품명</th>
                <th>수량</th>
                <th>할인금액</th>
                <th>할인적용금액</th>
                <th>배송비</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cartlist, index) in cartlists" :key="index">
                <td class="tb-checkbox">
                  <input
                    class="checkbox"
                    type="checkbox"
                    v-model="select"
                    :value="cartlist"
                  />
                </td>
                <td></td>
                <td class="table-line item-title">
                  <img class="item-img" :src="cartlist.img" alt="상품이미지" />
                  <div class="item-name">
                    {{ cartlist.title }}
                    <div class="origin-price">{{`정상가 ${cartlist.originPrice}`}}</div>
                  </div>
                </td>
                <td class="table-line">
                  <!-- +, - 하나의 함수로 -->
                  <button
                    class="amt-btn"
                    v-if="cartlist.amount > 0"
                    v-on:click="cartlist.amount -= 1"
                  >
                    -
                  </button>
                  <p class="amt-price">{{ cartlist.amount }}</p>
                  <button class="amt-btn" v-on:click="cartlist.amount += 1">
                    +
                  </button>
                </td>
                <td class="sale price table-line">{{ `-${cartlist.sale}` }}</td>
                <td class="cart price table-line">
                  {{ (cartlist.originPrice - cartlist.sale) * cartlist.amount }}
                </td>
                <td class="shipping price">{{ cartlist.shippingFee }}</td>
              </tr>
            </tbody>
          </table>
          <button v-on:click="removeItem" class="select-delete">
            선택삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartLists } from './cartLists.js'

export default {
  data() {
    return {
      cartLists,
      selectAll: false,
      select: []
    }
  },
  methods: {
    // 이 기능은 동작하지 않는다고 한다.......흑 사실 기능도 아니었다고 한다..
    removeItem() {
      if (this.select === true) {
        this.cartlists.splice()
      }
    },
    selectAllItems() {
      if (this.selectAll) {
        this.selectAll = false
        this.select = []
      } else {
        this.selectAll = true
        this.select = this.cartlists
      }
    }
  },
  updated() {
    if (this.select.length === this.cartlists.length) {
      this.selectAll = true
    }
    if (this.select.length !== this.cartlists.length) {
      this.selectAll = false
    }
    this.$emit("sendResultData", this.select)
  }
}
</script>

<style scoped>
.content {
    width: 100%;
    margin: 0 auto;
  }
.rectangle {
    width: 1200px;
    margin: 32px auto 0;
    border-top: solid 1px #dfdfdf;
    border-right: solid 1px #dfdfdf;
    border-left: solid 1px #dfdfdf;
    background-color: #ffffff;
  }
.cart-name {
    width: 89px;
    height: 36px;
    margin: 32px 0 16px 40px;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #212121;
  }
.cart-count {
    width: 38px;
    height: 20px;
    margin: 0 0 17px 40px;
    font-family: SpoqaHanSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #212121;
  }
.cart-table {
    width: 1120px;
    border-top: solid 1px #666666;
    margin: 0 40px 16px;
  }
.cart-table th {
    width: 140px;
    text-align: center;
  }
.cart-table tr {
    width: 100%;
    height: 140px;
    border-bottom: solid 1px #ececec;
    vertical-align: middle;
  }
.cart-table td {
    height: 140px;
    padding: 16px;
    font-family: SpoqaHanSans;
    font-size: 16px;
    vertical-align: middle;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #212121;
  }
.table-header {
    height: 42px;
    font-family: SpoqaHanSans;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #212121;
  }
.table-line {
    height: 140px;
    border-right: solid 1px #ecece0;
  }
.tb-checkbox {
    width: 52px;
    padding: 11px 8px 11px 24px;
  }
.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 40px;
    background-color: #dfdfdf;
  }
.checkbox:checked {
    background-color: #1673e6;
  }
.item-title {
    display: flex;
  }
.item-img {
    width: 146px;
    height: 108px;
    border-radius: 4px;
    background: darkturquoise;
  }
.item-name {
    width: 268px;
    height: 48px;
    margin: 23px 0 0 16px;
  }
.origin-price {
    margin-top: 8px;
    font-size: 14px;
    color: #666666;
  }
.price {
    min-width: 22px;
    height: 20px;
    text-align: right;
    font-size: 14px;
  }
.sale {
    font-weight: bold;
    color: #e13a3a;
  }
.table-header .select-all {
    width: 52px;
    height: 20px;
    font-family: SpoqaHanSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #666666;
  }
.th-title {
    width: 446px;
  }
.amt-btn {
    width: 30px;
    height: 30px;
    margin: 39px 0 39px;
    border-radius: 8px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
    color: #c1c1c1;
  }
.amt-price {
    display: inline-block;
    margin: 0 10px 0;
  }
.select-delete {
    width: 84px;
    height: 42px;
    margin-left: 40px;
    border-radius: 4px;
    border: solid 1px #dfdfdf;
    background-color: #ffffff;
  }
</style>
