<template>
  <div>
    <div class="cart-page">
      <cart-cast
        v-if="!orderState"
        v-on:sendResultData="getResultData"
        :cart-lists="cartLists"
      />
      <cart-breakdown
        v-if="!orderState && cartLists.length !== 0"
        v-bind:result-data="resultData"
        v-on:event="handleShowOrder"
        :cart-lists="cartLists"
      />
      <order-sheet
        v-if="orderState"
        :cart-lists="cartLists"
        :result-data="resultData"
        :order-data="orderData"
      />
      <shipping-info v-if="orderState" />
    </div>
  </div>
</template>
<script>
  import cartBreakdown from "../../../components/store/cartBreakdown.vue"
  // 장바구니 내 가격계산서 + 주문 버튼
  import cartCast from "../../../components/store/cartCast.vue"
  // 장바구니 상품 테이블
  import orderSheet from "../../../components/store/orderSheet.vue"
  // 주문서 주문정보 확인
  import shippingInfo from "../../../components/store/shippingInfo.vue"
  // 주문서 배송정보
  import { cartLists } from "../../../components/store/cartLists.js"
  // 장바구니 상품리스트 dummy data
  export default {
    data() {
      return {
        cartLists,
        resultData: [],
        orderState: false,
        orderData: null
      }
    },
    components: {
      "cart-breakdown": cartBreakdown,

      "cart-cast": cartCast,
      "order-sheet": orderSheet,
      "shipping-info": shippingInfo
    },
    methods: {
      getResultData(data) {
        this.resultData = data
      },
      handleShowOrder(order) {
        if (this.resultData.length !== 0) {
          this.orderState = true
          this.orderData = order
        } else {
          alert("선택된 상품이 없습니다.")
        }
      }
    }
  }
</script>

<style scoped>
  .cart-page {
    width: 1200px;
    margin: 32px auto 0;
    border: 1px solid #dfdfdf;
    background-color: #ffffff;
    text-align: center;
  }
</style>
