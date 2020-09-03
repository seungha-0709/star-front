<template>
  <div>
    <modal-cancel :modalProps="modalInfo" />
  </div>
</template>

<script>
import modalCancel from "../../components/modal/modalCancel.vue"
import { modalInfo } from "../../components/modal/modal.js"

export default {
  data() {
    return {
      modalInfo
    }
  },
  components: {
    modalCancel
  }
}
</script>

<style scoped>
</style>