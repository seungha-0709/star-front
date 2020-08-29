<template>
  <div>
    <cart-empty />
    <cart-item v-on:sendResultData="getResultData" />
    <cart-breakdown v-bind:result-data="resultData" />
  </div>
</template>
<script>
import cartEmpty from "../../../components/store/cartEmpty.vue"
import cartItem from "../../../components/store/cartItem.vue"
import cartBreakdown from "../../../components/store/cartBreakdown.vue"
export default {
  data() {
    return {
      resultData: []
    }
  },
  components: {
    "cart-item": cartItem,
    "cart-breakdown": cartBreakdown,
    "cart-empty": cartEmpty
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
}
</style>
