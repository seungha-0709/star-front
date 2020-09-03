<template>
  <div>
    <modal v-bind:modalProps="modalInfo" />
  </div>
</template>

<script>
import modal from "../../components/modal/modal.vue"
import { modalInfo } from "../../components/modal/modalCancel.js"

export default {
  data() {
    return {
      modalInfo
    }
  },
  components: {
    modal
  }
}
</script>

<style scoped>
</style>