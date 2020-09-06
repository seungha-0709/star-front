<template>
  <tbody class="cart-table">
    <tr v-for="(cartList, index) in cartLists" :key="index" id="selected-color">
      <td v-if="select" class="tb-checkbox">
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
      <td
        class="table-line item-title"
        :class="{ 'auto-width': select === null }"
      >
        <img class="item-img" :src="cartList.img" alt="상품이미지" />
        <div class="item-name">
          {{ cartList.title }}
          <div class="origin-price">
            {{ `정상가 ${cartList.originPrice.toLocaleString()}원` }}
          </div>
        </div>
      </td>
      <td class="table-line amount">
        <button
          v-if="select"
          class="amt-btn"
          v-on:click="amountControl(index, 'min')"
        >
          <minus-icon size="20" class="icon-add minus-icon"></minus-icon>
        </button>
        <p class="amt-price">{{ cartList.amount }}</p>
        <button
          v-if="select"
          class="amt-btn"
          v-on:click="amountControl(index, 'plus')"
        >
          <plus-icon size="20" class="icon-add plus-icon"></plus-icon>
        </button>
      </td>
      <td class="sale price table-line">
        {{ `-${(cartList.sale * cartList.amount).toLocaleString()}원` }}
      </td>
      <td class="cart price table-line">
        {{
          `${(
            (cartList.originPrice - cartList.sale) *
            cartList.amount
          ).toLocaleString()}원`
        }}
      </td>
      <td class="shipping price">
        {{ `${cartList.shippingFee.toLocaleString()}원` }}
      </td>
    </tr>
  </tbody>
</template>

<script>
  import checkButton from "../common/checkButton"
  // 장바구니 체크박스 체크버튼 아이콘
  import { PlusIcon, MinusIcon } from "vue-feather-icons"

  export default {
    props: ["cart-lists", "select-all", "select"],
    data() {
      return {}
    },
    components: {
      "check-button": checkButton,
      PlusIcon,
      MinusIcon
    },
    methods: {
      clickCartIndex(index) {
        if (this.select.includes(index)) {
          // indexOf > 위치
          const selectBox = this.select.indexOf(index)
          if (selectBox > -1) this.select.splice(selectBox, 1)
        } else {
          this.select.push(index)
        }
      },
      amountControl(index, type) {
        if (type === "plus") {
          this.cartLists[index].amount += 1
        } else if (type === "min" && this.cartLists[index].amount > 1) {
          this.cartLists[index].amount -= 1
        }
      }
    }
  }
</script>

<style scoped>
  .cart-table tr {
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
  .item-title.auto-width {
    width: auto;
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
</style>
