<template>
  <div>
    <cart-item @sendResultData="getResultData" />
    <cart-breakdown :result-data="updateResultData" />
  </div>
</template>
<script>
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
      "cart-breakdown": cartBreakdown
    },
    methods: {
      getResultData(data) {
        this.resultData = data
      }
    },
    computed: {
      updateResultData() {
        return this.resultData
      }
    }
  }
</script>
