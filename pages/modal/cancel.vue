<template>
  <div>
    <span @click="onModalOpen">취소/환불 신청</span>
    <modal
      :modalProps="modalInfoCancel"
      :modalDisplay="modalOpen"
      @modalClose="onModalClose"
    >
      <modal-cancel />
    </modal>
  </div>
</template>

<script>
  import modal from "../../components/modal/modal.vue"
  import modalCancel from "../../components/modal/modalCancel.vue"
  import { modalInfoCancel } from "../../components/modal/modal.js"

  export default {
    data() {
      return {
        modalInfoCancel,
        modalOpen: false
      }
    },
    components: {
      modal,
      modalCancel
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
