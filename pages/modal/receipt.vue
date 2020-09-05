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
  import { modalInfoReceipt } from "../../components/modal/modal.js"
  import modalReceipt from "../../components/modal/modalReceipt.vue"

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
      onModalClose(a) {
        this.modalOpen = a
        console.log(a)
      }
    }
  }
</script>

<style scoped></style>
