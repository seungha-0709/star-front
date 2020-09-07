<template>
  <div>
    <order-list
      v-for="(item, i) in paymentInfo"
      :key="i"
      :orderListData="paymentInfo"
      :indexData="i"
    />
  </div>
</template>

<script>
  import orderList from "../../components/orderList/orderList.vue"
  import { paymentInfo } from "../../components/orderList/payment.js"

  export default {
    data() {
      return {
        paymentInfo
      }
    },
    components: {
      orderList
    }
  }
</script>
