<template>
  <div>
    <modal-order :modalProps="modalInfo2" />
  </div>
</template>

<script>
import modalOrder from "../../components/modal/modalOrder.vue"
import { modalInfo2 } from "../../components/modal/modal.js"

export default {
  data() {
    return {
      modalInfo2
    }
  },
  components: {
    modalOrder
  }
}
</script>

<style scoped>
</style>