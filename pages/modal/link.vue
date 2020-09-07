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
      <span @click="onModalOrderOpen">구매 상세보기</span>
    </btn>
    <modal
      :modalProps="modalInfoOrder"
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
      <span @click="onModalReceiptOpen">구매 영수증 출력</span>
    </btn>
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
      <span @click="onModalCancelOpen">취소/환불 신청</span>
    </btn>
    <modal
      :modalProps="modalInfoCancel"
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
  import modalOrder from "../../components/modal/modalOrder.vue"
  import modalReceipt from "../../components/modal/modalReceipt.vue"
  import modalCancel from "../../components/modal/modalCancel.vue"
  import {
    modalInfoCancel,
    modalInfoOrder,
    modalInfoReceipt
  } from "../../components/modal/modal.js"

  export default {
    data() {
      return {
        modalInfoCancel,
        modalInfoOrder,
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
      /** 모달 팝업 열고 닫는 기능 함수 */
      onModalOrderOpen() {
        this.modalOrderOpen = true
      },
      onModalOrderClose(value) {
        this.modalOrderOpen = value
      },
      onModalReceiptOpen() {
        this.modalReceiptOpen = true
      },
      onModalReceiptClose(value) {
        this.modalReceiptOpen = value
      },
      onModalCancelOpen() {
        this.modalCancelOpen = true
      },
      onModalCancelClose(value) {
        this.modalCancelOpen = value
      }
    }
  }
</script>
