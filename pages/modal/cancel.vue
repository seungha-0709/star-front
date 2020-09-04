<template>
  <div>
    <span @click="onModalOpen">취소/환불 신청</span>
    <modal
      :modalProps="modalInfo"
      :modalDisplay="modalOpen"
      @modalClose="onModalClose"
    >
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
        modalInfo,
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
      onModalClose(a) {
        this.modalOpen = a
        console.log(a)
      }
    }
  }
</script>

<style scoped></style>
