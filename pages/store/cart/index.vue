<template>
  <div>
    <cart-item />
  </div>
</template>
<script>
import cartItem from "../../../components/store/cartItem.vue"
export default {
  data() {
    return {}
  },
  components: {
    'cart-item': cartItem
  }
}
</script>