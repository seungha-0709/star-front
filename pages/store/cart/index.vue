<template>
  <div>
    <div class="cart-page">
      <cart-cast v-on:sendResultData="getResultData" :cart-lists="cartLists" />
      <cart-breakdown v-bind:result-data="resultData" />
      <order-button />
      <order-sheet />
      <shipping-info />
      <order-button />
    </div>
  </div>
</template>
<script>
import cartEmpty from "../../../components/store/cartEmpty.vue"
import cartBreakdown from "../../../components/store/cartBreakdown.vue"
import orderButton from "../../../components/store/orderButton.vue"
import cartCast from "../../../components/store/cartCast.vue"
import orderSheet from "../../../components/store/orderSheet.vue"
import shippingInfo from "../../../components/store/shippingInfo.vue"

import { cartLists } from "../../../components/store/cartLists.js"

export default {
  data() {
    return {
      cartLists,
      resultData: []
    }
  },
  components: {
    "cart-breakdown": cartBreakdown,
    "cart-empty": cartEmpty,
    "order-button": orderButton,
    "cart-cast": cartCast,
    "order-sheet": orderSheet,
    "shipping-info": shippingInfo
  },
  methods: {
    getResultData(data) {
      this.resultData = data
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
