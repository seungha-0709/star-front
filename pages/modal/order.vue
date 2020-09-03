<template>
  <div>
    <modal :modalProps="modalInfo2">
      <modal-order />
    </modal>
  </div>
</template>

<script>
import modal from "../../components/modal/modal.vue"
import { modalInfo2 } from "../../components/modal/modal.js"
import modalOrder from "../../components/modal/modalOrder.vue"

export default {
  data() {
    return {
      modalInfo2
    }
  },
  components: {
    modal,
    modalOrder
  }
}
</script>

<style scoped>
</style>