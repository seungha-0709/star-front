<template>
  <div class="content">
    <div class="rectangle">
      <div>
        <h3 class="cart-name">장바구니</h3>
        <p class="cart-count">{{ `총 ${cartLists.length}개` }}</p>
        <div>
          <table class="cart-table">
            <thead>
              <tr class="table-header">
                <th class="tb-checkbox">
                  <div class="checkbox-item">
                    <input
                      class="checkbox"
                      type="checkbox"
                      v-model="selectAll"
                      v-on:click="selectAllItems"
                    />
                    <p class="select-all">전체선택</p>
                  </div>
                </th>
                <th class="th-title">상품명</th>
                <th class="th-size">수량</th>
                <th class="th-size">할인금액</th>
                <th class="th-size">할인적용금액</th>
                <th class="th-size">배송비</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(cartList, index) in cartLists"
                :key="index"
                id="selected-color"
                v-bind:class="{normal: !(select.includes(index)), clicked: select.includes(index)}"
              >
                <td class="tb-checkbox">
                  <input
                    class="checkbox"
                    type="checkbox"
                    v-model="select"
                    :value="index"
                    v-on:click="clickCartIndex(index)"
                  />
                </td>
                <td class="table-line item-title">
                  <img class="item-img" :src="cartList.img" alt="상품이미지" />
                  <div class="item-name">
                    {{ cartList.title }}
                    <div class="origin-price">{{ `정상가 ${cartList.originPrice}원` }}</div>
                  </div>
                </td>
                <td class="table-line amount">
                  <!-- +, - 하나의 함수로... 하지만 두개로도 못했다고 한다.. -->
                  <!-- <button class="amt-btn" v-on:click="decreaseAmount(index)"> -->
                  <button class="amt-btn" v-on:click="amount(index, 'min')">-</button>
                  <p class="amt-price">{{ cartList.amount }}</p>
                  <!-- <button class="amt-btn" v-on:click="increaseAmount(index)"> -->
                  <button class="amt-btn" v-on:click="amount(index, 'plus')">+</button>
                </td>
                <td class="sale price table-line">{{ `-${cartList.sale * cartList.amount}원` }}</td>
                <td
                  class="cart price table-line"
                >{{ `${(cartList.originPrice - cartList.sale) * cartList.amount}원` }}</td>
                <td class="shipping price">{{ `${cartList.shippingFee}원` }}</td>
              </tr>
            </tbody>
          </table>
          <button v-on:click="removeItem" class="select-delete">선택삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartLists } from "./cartLists.js"

export default {
  data() {
    return {
      cartLists,
      selectAll: false,
      select: []
    }
  },
  methods: {
    removeItem() {
      // console.log("remove Items")
      // console.log(this.select)
      if (this.select.length) {
        // console.log(this.select.length)
        // console.log(this.cartLists.length)
        for (let index = 0; index < this.select.length; index++) {
          const tmpIdx = this.select[this.select.length - index - 1]
          // tmpIdx 변수명 바꿀 예정
          // console.log(tmpIdx)
          this.cartLists.splice(tmpIdx, 1)
        }
      }
    },
    selectAllItems() {
      if (this.selectAll) {
        this.selectAll = false
        this.select = []
      } else {
        this.selectAll = true
        // this.select = this.cartLists
        this.select = []
        for (let index = 0; index < cartLists.length; index++) {
          this.select.push(index)
        }
      }
    },
    clickCartIndex(index) {
      if (this.select.includes(index)) {
        // indexOf > 위치
        const tmpIdx = this.select.indexOf(index)
        if (tmpIdx > -1) this.select.splice(tmpIdx, 1)
      } else {
        this.select.push(index)
      }
      console.log(this.select)
    },
    amount(index, abcdef) {
      if (abcdef === "plus") {
        this.cartLists[index].amount += 1
      } else if (abcdef === "min") {
        if (this.cartLists[index].amount > 1) this.cartLists[index].amount -= 1
      }
    }
  },
  updated() {
    if (this.select.length === this.cartLists.length) {
      this.selectAll = true
    }
    if (this.select.length !== this.cartLists.length) {
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
  font-family: SpoqaHanSans;
  font-weight: normal;
  font-size: 14px;
  color: #212121;
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
  font-size: 24px;
  font-weight: bold;
}
.cart-count {
  width: 38px;
  height: 20px;
  margin: 0 0 17px 40px;
}
.cart-table {
  width: 1120px;
  border-top: solid 1px #666666;
  margin: 0 40px 16px;
}
.cart-table th {
  text-align: center;
}
.table-header {
  height: 42px;
  font-size: 15px;
  text-align: center;
}
.cart-table thead tr {
  width: 100%;
  border-bottom: solid 1px #ececec;
  vertical-align: middle;
}
.cart-table tbody {
  width: 100%;
}
.cart-table td {
  height: 140px;

  border-bottom: solid 1px #ececec;
  font-size: 16px;
  vertical-align: middle;
}

.table-line {
  height: 140px;
  border-right: solid 1px #ecece0;
  padding: 16px 16px 16px 0;
}
.checkbox-item {
  display: flex;
}
.tb-checkbox {
  width: 114px;
  padding: 11px 8px 11px 0;
}
.checkbox {
  width: 20px;
  height: 20px;
  margin-left: 8px;
  border-radius: 40px;
  background-color: #dfdfdf;
}
.checkbox:checked {
  background-color: #1673e6;
}
.th-size {
  width: 140px;
  padding: 10px 0 10px;
}
.item-title {
  display: flex;
  width: 446px;
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
  font-size: 14px;
  margin-top: 8px;
  color: #666666;
}
.price {
  width: 140px;
  height: 140px;
  height: 20px;
  text-align: right;
}
.sale {
  font-weight: bold;
  color: #e13a3a;
}
.table-header .select-all {
  font-size: 14px;
  width: 52px;
  height: 20px;
  margin-left: 8px;
  text-align: center;
  color: #666666;
}
.th-title {
  width: 446px;
}
.amount {
  padding-left: 16px;
}
.amt-btn {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 39px 0 39px;
  border-radius: 8px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  color: #c1c1c1;
}
.amt-price {
  text-align: center;
  width: 39px;
  display: inline-block;
}
.shipping {
  padding-right: 16px;
}
.select-delete {
  width: 84px;
  height: 42px;
  margin: 0 0 48px 40px;
  border-radius: 4px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
}
.normal {
  background-color: #ffffff;
}
.clicked {
  background-color: cornflowerblue;
}
</style>
