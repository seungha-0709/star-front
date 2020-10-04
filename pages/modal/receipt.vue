<template>
  <div>
    <span @click="onModalOpen">구매 영수증</span>
    <modal
      :modalProps="modalInfoReceipt"
      :modalDisplay="modalOpen"
      @modalClose="onModalClose"
    >
      <modal-receipt />
    </modal>
  </div>
</template>

<script>
import modal from "../../components/modal/modal.vue"
import modalReceipt from "../../components/modal/modalReceipt.vue"
import { modalInfoReceipt } from "../../assets/data/modal.js"

export default {
  data() {
    return {
      modalInfoReceipt,
      modalOpen: false
    }
  },
  components: {
    modal,
    modalReceipt
  },
  methods: {
    onModalOpen() {
      this.modalOpen = true
      console.log(this.modalOpen)
    },
    onModalClose(value) {
      this.modalOpen = value
    }
  }
}
</script>

<style scoped></style>
