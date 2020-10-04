<template>
  <div>
    <span @click="onModalOpen">주문 상세정보</span>
    <modal
      :modalProps="modalInfoOrder"
      :modalDisplay="modalOpen"
      @modalClose="onModalClose"
    >
      <modal-order />
    </modal>
  </div>
</template>

<script>
import modal from "../../components/modal/modal.vue"
import modalOrder from "../../components/modal/modalOrder.vue"
import { modalInfoOrder } from "../../assets/data/modal.js"

export default {
  data() {
    return {
      modalInfoOrder,
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
    },
    onModalClose(value) {
      this.modalOpen = value
    }
  }
}
</script>

<style scoped></style>
