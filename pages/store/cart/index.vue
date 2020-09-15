<template>
  <div>
    <div class="cart-page">
      <cart-cast
        v-if="!orderState"
        v-on:sendResultData="getResultData"
        :cart-lists="storeCartLists"
      />
      <cart-breakdown
        v-if="!orderState && storeCartLists.length !== 0"
        v-bind:result-data="resultData"
        v-on:event="handleShowOrder"
        :cart-lists="storeCartLists"
      />
      <order-sheet
        v-if="orderState"
        :cart-lists="storeCartLists"
        :result-data="resultData"
        :order-data="orderData"
      />
      <shipping-info v-if="orderState" />
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from "vuex"

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
    computed: {
      // store에 해당되는 getters값 불러옴
      ...mapGetters({
        storeCartLists: "GE_CART_LISTS"
      })
    },
    // 페이지가 생성될때 바로 실행됨
    created() {
      // 만들어놓은 cartLists데이터를 vuex state에 새롭게 넣어줌.
      this.createdCartLists()
    },
    components: {
      "cart-breakdown": cartBreakdown,
      "cart-cast": cartCast,
      "order-sheet": orderSheet,
      "shipping-info": shippingInfo
    },
    methods: {
      ...mapActions(["AC_CART_LISTS"]),
      // AC_CART_LISTS 액션 실행하는 메소드
      createdCartLists() {
        this.AC_CART_LISTS(this.cartLists)
      },
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
