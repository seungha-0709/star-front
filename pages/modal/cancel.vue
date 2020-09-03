<template>
  <div>
    <modal :modalProps="modalInfo">
      <modal-cancel />
    </modal>
  </div>
</template>

<script>
import modal from "../../components/modal/modal.vue"
import { modalInfo } from "../../components/modal/modal.js"
import modalCancel from "../../components/modal/modalCancel.vue"

export default {
  data() {
    return {
      modalInfo
    }
  },
  components: {
    modal,
    modalCancel
  }
}
</script>

<style scoped>
</style>