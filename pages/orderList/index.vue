<template>
  <div>
    <order-list
      v-for="(item, i) in computedListData"
      :key="i"
      :orderListData="computedListData"
      :idxData="i"
      :isCancelRefund="item === true || item.refund === true"
      @open="modalOn"
      @id="modalId"
    />
    <pagination
      :currentPage="page"
      :total="total"
      :limit="limit"
      :blockSize="blockSize"
      v-on:paging="pagingMethod"
    />

    <modal
      :modalProps="modalInfoOrder"
      v-if="modalTypeOnOff[0].onoff"
      @close="modalOff('order')"
    >
      <modal-order
        :paymentData="paymentInfo.find((data) => data.id === modalIndex)"
      />
    </modal>

    <modal
      :modalProps="modalInfoReceipt"
      v-if="modalTypeOnOff[1].onoff"
      @close="modalOff('receipt')"
    >
      <modal-receipt
        :paymentData="paymentInfo.find((data) => data.id === modalIndex)"
      />
    </modal>

    <modal
      :modalProps="modalInfoCancel"
      v-if="modalTypeOnOff[2].onoff"
      @close="modalOff('cancel')"
    >
      <modal-cancel
        :paymentData="paymentInfo.find((data) => data.id === modalIndex)"
      />
    </modal>

    <modal
      :modalProps="modalInfoQna"
      v-if="modalTypeOnOff[3].onoff"
      @close="modalOff('qna')"
    >
      <modal-qna
        :paymentData="paymentInfo.find((data) => data.id === modalIndex)"
      />
    </modal>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex"
  import modal from "../../components/modal/modal.vue"
  import modalOrder from "../../components/modal/modalOrder.vue"
  import modalReceipt from "../../components/modal/modalReceipt.vue"
  import modalCancel from "../../components/modal/modalCancel.vue"
  import modalQna from "../../components/modal/modalQna.vue"
  import orderList from "../../components/orderList/orderList.vue"
  import pagination from "../../components/orderList/pagination.vue"
  import { paymentInfo } from "../../components/orderList/payment.js"

  export default {
    data() {
      /**
       * @description
       * total: 받아오는 전체 데이터 개수
       * limit: 한 페이지에 표시될 데이터 개수
       * block: 페이지 리스트에 표시될 페이지 수
       * modalIndex: paymentInfo 에서 하위 컴포넌트에 전달할 데이터의 인덱스
       */
      return {
        paymentInfo,
        modalIndex: 0,
        total: paymentInfo.length,
        page: 1,
        limit: 5,
        blockSize: 5
      }
    },
    components: {
      modal,
      modalOrder,
      modalReceipt,
      modalCancel,
      modalQna,
      orderList,
      pagination
    },
    computed: {
      /** store에서 각 데이터들 불러오는 부분 */
      ...mapState("orderListModal", {
        modalInfoCancel: "modalInfoCancel",
        modalInfoOrder: "modalInfoOrder",
        modalInfoReceipt: "modalInfoReceipt",
        modalInfoQna: "modalInfoQna",
        modalTypeOnOff: "modalTypeOpen"
      }),
      // 로컬 데이터를 limit값 기준으로 리스트 분할
      computedListData() {
        return this.paymentInfo.slice(
          (this.page - 1) * this.limit,
          this.page * this.limit
        )
      }
    },
    methods: {
      /** 전달받은 id를 modalIndex에 반영 */
      modalId(id) {
        this.modalIndex = id
      },
      /** 모달 팝업 열고 닫는 함수 */
      ...mapMutations("orderListModal", ["modalOn", "modalOff"]),
      // page 이동 메서드. 블록단위 이전, 다음, 단일 페이징
      pagingMethod(clickPage) {
        if (!clickPage || clickPage === this.page) return null
        return (this.page = clickPage)
      }
    }
  }
</script>
