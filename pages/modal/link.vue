<template>
  <div>
    <btn
      color="#212121"
      backgroundColor="#fff"
      borderRadius="4"
      borderColor="#dfdfdf"
      fontSize="14"
      width="97"
      height="28"
    >
      <span @click="onModalOrderOpen"> 구매 상세보기</span></btn
    >
    <modal
      :modalProps="modalInfo2"
      :modalDisplay="modalOrderOpen"
      @modalClose="onModalOrderClose"
    >
      <modal-order />
    </modal>

    <btn
      color="#212121"
      backgroundColor="#fff"
      borderRadius="4"
      borderColor="#dfdfdf"
      fontSize="14"
      width="113"
      height="28"
    >
      <span @click="onModalReceiptOpen">구매 영수증 출력</span></btn
    >
    <modal
      :modalProps="modalInfoReceipt"
      :modalDisplay="modalReceiptOpen"
      @modalClose="onModalReceiptClose"
    >
      <modal-receipt />
    </modal>

    <btn
      color="#212121"
      backgroundColor="#fff"
      borderRadius="4"
      borderColor="#dfdfdf"
      fontSize="14"
      width="102"
      height="28"
    >
      <span @click="onModalCancelOpen">취소/환불 신청</span></btn
    >
    <modal
      :modalProps="modalInfo"
      :modalDisplay="modalCancelOpen"
      @modalClose="onModalCancelClose"
    >
      <modal-cancel />
    </modal>
  </div>
</template>

<script>
  import btn from "../../components/common/btn.vue"
  import modal from "../../components/modal/modal.vue"
  import {
    modalInfo,
    modalInfo2,
    modalInfoReceipt
  } from "../../components/modal/modal.js"
  import modalOrder from "../../components/modal/modalOrder.vue"
  import modalReceipt from "../../components/modal/modalReceipt.vue"
  import modalCancel from "../../components/modal/modalCancel.vue"

  export default {
    data() {
      return {
        modalInfo,
        modalInfo2,
        modalInfoReceipt,
        modalOrderOpen: false,
        modalReceiptOpen: false,
        modalCancelOpen: false
      }
    },
    components: {
      btn,
      modal,
      modalOrder,
      modalReceipt,
      modalCancel
    },
    methods: {
      onModalOrderOpen() {
        this.modalOrderOpen = true
        console.log(this.modalOrderOpen)
      },
      onModalOrderClose(a) {
        this.modalOrderOpen = a
        console.log(a)
      },
      onModalReceiptOpen() {
        this.modalReceiptOpen = true
        console.log(this.modalReceiptOpen)
      },
      onModalReceiptClose(a) {
        this.modalReceiptOpen = a
        console.log(a)
      },
      onModalCancelOpen() {
        this.modalCancelOpen = true
        console.log(this.modalCancelOpen)
      },
      onModalCancelClose(a) {
        this.modalCancelOpen = a
        console.log(a)
      }
    }
  }
</script>
