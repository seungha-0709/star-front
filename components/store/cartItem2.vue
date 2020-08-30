<template>
  <div class="content">
    <table class="cart-table">
      <tbody>
        <tr
          v-for="(cartList, index) in cartLists"
          :key="index"
          id="selected-color"
          v-bind:class="{
                  normal: !select.includes(index),
                  clicked: select.includes(index)
                }"
        >
          <td class="tb-checkbox">
            <label>
              <input
                type="checkbox"
                v-model="select"
                :value="index"
                v-on:click="clickCartIndex(index)"
              />
              <check-button :value="select.includes(index)" />
            </label>
          </td>
          <td class="table-line item-title">
            <img class="item-img" :src="cartList.img" alt="상품이미지" />
            <div class="item-name">
              {{ cartList.title }}
              <div class="origin-price">{{ `정상가 ${cartList.originPrice.toLocaleString()}원` }}</div>
            </div>
          </td>
          <td class="table-line amount">
            <button class="amt-btn" v-on:click="amountControl(index, 'min')">
              <minus-icon size="20" class="icon-add minus-icon"></minus-icon>
            </button>
            <p class="amt-price">{{ cartList.amount }}</p>
            <button class="amt-btn" v-on:click="amountControl(index, 'plus')">
              <plus-icon size="20" class="icon-add plus-icon"></plus-icon>
            </button>
          </td>
          <td class="sale price table-line">
            {{
            `-${(cartList.sale * cartList.amount).toLocaleString()}원`
            }}
          </td>
          <td class="cart price table-line">
            {{
            `${(
            (cartList.originPrice - cartList.sale) *
            cartList.amount
            ).toLocaleString()}원`
            }}
          </td>
          <td class="shipping price">{{ `${cartList.shippingFee.toLocaleString()}원` }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { cartLists } from "./cartLists.js"
import checkButton from "../common/checkButton"
import { PlusIcon, MinusIcon } from "vue-feather-icons"

export default {
  data() {
    return {
      cartLists,
      selectAll: false,
      select: []
    }
  },
  components: {
    "check-button": checkButton,
    PlusIcon,
    MinusIcon
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
    }
  },
  updated() {
    if (this.select.length === this.cartLists.length) {
      this.selectAll = true
    }
    // console.log(this.select)
  },
  amountControl(index, type) {
    if (type === "plus") {
      this.cartLists[index].amount += 1
    } else if (type === "min") {
      if (this.cartLists[index].amount > 1) this.cartLists[index].amount -= 1
    }
    this.$emit("sendResultData", this.select)
  }
}
</script>

<style scoped>
.content {
  width: 1120px;
  margin: 0 auto;
  font-family: SpoqaHanSans;
  font-weight: normal;
  font-size: 14px;
  color: #212121;
}
.cart-table tbody tr {
  border-bottom: solid 1px #ececec;
}
.cart-table td {
  height: 140px;
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
  padding: 11px 8px 11px 24px;
}
.tb-checkbox label input[type="checkbox"] {
  display: none;
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
  text-align: left;
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
.th-title {
  width: 446px;
}
.amount {
  padding-left: 16px;
}
.amt-btn {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  color: #c1c1c1;
}
.amt-btn .icon-add {
  vertical-align: middle;
}
.amt-price {
  text-align: center;
  width: 39px;
  display: inline-block;
}
.shipping {
  padding-right: 16px;
}
.normal {
  background-color: #ffffff;
}
.clicked {
  background-color: rgb(22, 115, 230, 0.03);
}
</style>
