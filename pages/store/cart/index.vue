<template>
  <div>
    <div class="cart-page">
      <cart-cast v-if="!orderState" v-on:sendResultData="getResultData" :cart-lists="cartLists" />
      <cart-breakdown
        v-if="!orderState && cartLists.length !== 0"
        v-bind:result-data="resultData"
        v-on:event="handleShowOrder"
        :cart-lists="cartLists"
      />
      <order-sheet v-if="orderState" :cart-lists="cartLists" :result-data="resultData" />
      <shipping-info v-if="orderState" />
    </div>
  </div>
</template>
<script>
import cartEmpty from "../../../components/store/cartEmpty.vue"
import cartBreakdown from "../../../components/store/cartBreakdown.vue"
import cartCast from "../../../components/store/cartCast.vue"
import orderSheet from "../../../components/store/orderSheet.vue"
import shippingInfo from "../../../components/store/shippingInfo.vue"

import { cartLists } from "../../../components/store/cartLists.js"

export default {
  data() {
    return {
      cartLists,
      resultData: [],
      orderState: false
    }
  },
  components: {
    "cart-breakdown": cartBreakdown,
    "cart-empty": cartEmpty,
    "cart-cast": cartCast,
    "order-sheet": orderSheet,
    "shipping-info": shippingInfo
  },
  methods: {
    getResultData(data) {
      this.resultData = data
    },
    handleShowOrder() {
      this.orderState = true
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
