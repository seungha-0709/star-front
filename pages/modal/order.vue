<template>
  <div>
    <span @click="onModalOpen">주문 상세정보</span>
    <modal
      :modalProps="modalInfo2"
      :modalDisplay="modalOpen"
      @modalClose="onModalClose"
    >
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
        modalInfo2,
        modalOpen: false
      }
    },
    components: {
      modal,
      modalOrder
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
