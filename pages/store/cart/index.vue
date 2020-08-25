<template>
  <div>
    <cart-item />
    <cart-breakdown />
  </div>
</template>
<script>
import cartItem from "../../../components/store/cartItem.vue"
import cartBreakdown from "../../../components/store/cartBreakdown.vue"
export default {
  data() {
    return {}
  },
  components: {
    'cart-item': cartItem,
    'cart-breakdown': cartBreakdown
  }
}
</script>